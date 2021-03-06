import produce from "immer"
import { Reducer } from "redux"
import { TodoId } from "src/domain/models/Todo"
import { ulid } from "ulid"
import * as actions from "./actions"
import { ActionTypes, TodoState } from "./types"

type Action = ReturnType<
  | typeof actions.addTodo
  | typeof actions.changeTodoStatus
  | typeof actions.deleteTodo
  | typeof actions.setVisibilityFilter
>

const createTodoId = (): TodoId => {
  return ulid() as TodoId
}

export const initialState: TodoState = {
  todoList: [],
  visibilityFilter: "all",
}

export const reducer: Reducer<TodoState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return produce(state, (draft) => {
        const { label } = action.payload
        draft.todoList.push({
          id: createTodoId(),
          label,
          status: "active",
        })
      })

    case ActionTypes.CHANGE_TODO_STATUS:
      return produce(state, (draft) => {
        const { todoId, todoStatus } = action.payload
        draft.todoList.find((t) => t.id === todoId)!.status = todoStatus
      })

    case ActionTypes.DELETE_TODO:
      return produce(state, (draft) => {
        const { todoId } = action.payload
        draft.todoList = draft.todoList.filter((t) => t.id !== todoId)
      })

    case ActionTypes.SET_VISIBILITY_FILTER:
      return produce(state, (draft) => {
        const { visibilityFilter } = action.payload
        draft.visibilityFilter = visibilityFilter
      })

    default: {
      // case の定義忘れ防止のため
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action
      return state
    }
  }
}
