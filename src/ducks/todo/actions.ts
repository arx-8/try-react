import { TodoId, TodoStatus, VisibilityFilter } from "src/domain/models/Todo"
import { ActionWithPayloadHandler } from "src/types/ReduxTypes"
import { ActionTypes } from "./types"

export const addTodo: ActionWithPayloadHandler<
  typeof ActionTypes.ADD_TODO,
  {
    label: string
  }
> = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
})

export const deleteTodo: ActionWithPayloadHandler<
  typeof ActionTypes.DELETE_TODO,
  {
    todoId: TodoId
  }
> = (payload) => ({
  type: ActionTypes.DELETE_TODO,
  payload,
})

export const changeTodoStatus: ActionWithPayloadHandler<
  typeof ActionTypes.CHANGE_TODO_STATUS,
  {
    todoId: TodoId
    todoStatus: TodoStatus
  }
> = (payload) => ({
  type: ActionTypes.CHANGE_TODO_STATUS,
  payload,
})

export const setVisibilityFilter: ActionWithPayloadHandler<
  typeof ActionTypes.SET_VISIBILITY_FILTER,
  {
    visibilityFilter: VisibilityFilter
  }
> = (payload) => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  payload,
})
