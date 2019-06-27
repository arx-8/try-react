import { Todo, VisibilityFilter, TodoId } from "domain/models/Todo"
import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { actions } from "./actions"

export type State = Readonly<{
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
  loading: {
    all: boolean
    add: boolean
    ids: TodoId[]
  }
  errorMessage?: string
}>

export const initialState: State = {
  todoList: [],
  visibilityFilter: "all",
  loading: {
    all: false,
    add: false,
    ids: [],
  },
  errorMessage: undefined,
}

export const reducer = reducerWithInitialState(initialState)
  /**
   * shared
   */
  .cases(
    [actions.changeTodoStatus.done, actions.deleteTodo.done],
    (state, payload) => {
      return produce(state, (draft) => {
        draft.loading.ids = draft.loading.ids.filter(
          (id) => id !== payload.params.id
        )
        draft.errorMessage = undefined
      })
    }
  )
  .cases(
    [actions.changeTodoStatus.failed, actions.deleteTodo.failed],
    (state, payload) => {
      return produce(state, (draft) => {
        draft.loading.ids = draft.loading.ids.filter(
          (id) => id !== payload.params.id
        )
        draft.errorMessage = payload.error.message
      })
    }
  )
  /**
   * changeTodoStatus
   */
  .case(actions.changeTodoStatus.started, (state, payload) => {
    return produce(state, (draft) => {
      const { id, label, status } = payload
      draft.loading.ids.push(id)

      // Optimistic Updates
      const t = draft.todoList.find((t) => t.id === id)!
      if (label) {
        t.label = label
      }
      if (status) {
        t.status = status
      }
    })
  })
  /**
   * deleteTodo
   */
  .case(actions.deleteTodo.started, (state, payload) => {
    return produce(state, (draft) => {
      const { id } = payload
      draft.loading.ids.push(id)

      // Optimistic Updates
      draft.todoList = draft.todoList.filter((t) => t.id !== id)!
    })
  })
  /**
   * addTodo
   */
  .case(actions.addTodo.started, (state) => {
    return produce(state, (draft) => {
      draft.loading.add = true
    })
  })
  .case(actions.addTodo.done, (state) => {
    return produce(state, (draft) => {
      draft.loading.add = false
      draft.errorMessage = undefined
    })
  })
  .case(actions.addTodo.failed, (state, payload) => {
    return produce(state, (draft) => {
      draft.loading.add = false
      draft.errorMessage = payload.error.message
    })
  })
  /**
   * fetchAllTodos
   */
  .case(actions.fetchAllTodos.started, (state) => {
    return produce(state, (draft) => {
      draft.loading.all = true
    })
  })
  .case(actions.fetchAllTodos.done, (state, payload) => {
    return produce(state, (draft) => {
      const { result } = payload
      draft.todoList = result
      draft.loading.all = false
      draft.errorMessage = undefined
    })
  })
  .case(actions.fetchAllTodos.failed, (state, payload) => {
    return produce(state, (draft) => {
      draft.loading.all = false
      draft.errorMessage = payload.error.message
    })
  })
  /**
   * setVisibilityFilter
   */
  .case(actions.setVisibilityFilter, (state, payload) => {
    return produce(state, (draft) => {
      const { visibilityFilter } = payload
      draft.visibilityFilter = visibilityFilter
    })
  })
  .build()
