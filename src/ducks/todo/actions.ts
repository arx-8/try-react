import { TodoId, TodoStatus, VisibilityFilter } from "domain/models/Todo"
import { ActionWithPayloadHandler } from "types/ReduxTypes"
import { ActionTypes } from "./types"

const addTodo: ActionWithPayloadHandler<
  typeof ActionTypes.ADD_TODO,
  {
    label: string
  }
> = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
})

const deleteTodo: ActionWithPayloadHandler<
  typeof ActionTypes.DELETE_TODO,
  {
    todoId: TodoId
  }
> = (payload) => ({
  type: ActionTypes.DELETE_TODO,
  payload,
})

const changeTodoStatus: ActionWithPayloadHandler<
  typeof ActionTypes.CHANGE_TODO_STATUS,
  {
    todoId: TodoId
    todoStatus: TodoStatus
  }
> = (payload) => ({
  type: ActionTypes.CHANGE_TODO_STATUS,
  payload,
})

const setVisibilityFilter: ActionWithPayloadHandler<
  typeof ActionTypes.SET_VISIBILITY_FILTER,
  {
    visibilityFilter: VisibilityFilter
  }
> = (payload) => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  payload,
})

export const actions = {
  addTodo,
  deleteTodo,
  changeTodoStatus,
  setVisibilityFilter,
}
