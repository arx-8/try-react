import { Todo, VisibilityFilter } from "domain/models/Todo"
import produce from "immer"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { actions } from "./actions"

export type State = {
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
  loading: boolean
}

export const initialState: State = {
  todoList: [],
  visibilityFilter: "all",
  loading: false,
}

export const reducer = reducerWithInitialState(initialState)
  .cases(
    [
      actions.addTodo.async.started,
      actions.changeTodoStatus.async.started,
      actions.deleteTodo.async.started,
      actions.fetchAllTodos.async.started,
    ],
    (state) => {
      return produce(state, (draft) => {
        draft.loading = true
      })
    }
  )
  .cases(
    [
      actions.addTodo.async.done,
      actions.changeTodoStatus.async.done,
      actions.deleteTodo.async.done,
    ],
    (state) => {
      return produce(state, (draft) => {
        draft.loading = false
      })
    }
  )
  .case(actions.fetchAllTodos.async.done, (state, payload) => {
    return produce(state, (draft) => {
      const { result } = payload
      draft.todoList = result
      draft.loading = false
    })
  })
  .case(actions.setVisibilityFilter, (state, payload) => {
    return produce(state, (draft) => {
      const { visibilityFilter } = payload
      draft.visibilityFilter = visibilityFilter
    })
  })
  .build()
