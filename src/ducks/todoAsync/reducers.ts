import { Todo, VisibilityFilter, TodoId } from "domain/models/Todo"
import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { actions } from "./actions"

export type State = {
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
  loading: {
    all: boolean
    add: boolean
    ids: TodoId[]
  }
}

export const initialState: State = {
  todoList: [],
  visibilityFilter: "all",
  loading: {
    all: false,
    add: false,
    ids: [],
  },
}

export const reducer = reducerWithInitialState(initialState)
  /**
   * shared
   */
  .cases(
    [actions.changeTodoStatus.async.done, actions.deleteTodo.async.done],
    (state, payload) => {
      return produce(state, (draft) => {
        draft.loading.ids = draft.loading.ids.filter(
          (id) => id !== payload.params.id
        )
      })
    }
  )
  /**
   * changeTodoStatus
   */
  .case(actions.changeTodoStatus.async.started, (state, payload) => {
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
  .case(actions.deleteTodo.async.started, (state, payload) => {
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
  .case(actions.addTodo.async.started, (state) => {
    return produce(state, (draft) => {
      draft.loading.add = true
    })
  })
  .case(actions.addTodo.async.done, (state) => {
    return produce(state, (draft) => {
      draft.loading.add = false
    })
  })
  /**
   * fetchAllTodos
   */
  .case(actions.fetchAllTodos.async.started, (state) => {
    return produce(state, (draft) => {
      draft.loading.all = true
    })
  })
  .case(actions.fetchAllTodos.async.done, (state, payload) => {
    return produce(state, (draft) => {
      const { result } = payload
      draft.todoList = result
      draft.loading.all = false
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
