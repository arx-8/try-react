import { TodoId, TodoStatus, VisibilityFilter } from "domain/models/Todo"
import { ActionWithPayloadHandler } from "types/ReduxTypes"

export enum ActionTypes {
  ADD_TODO = "TODO_ASYNC/ADD_TODO",
  DELETE_TODO = "TODO_ASYNC/DELETE_TODO",
  CHANGE_TODO_STATUS = "TODO_ASYNC/CHANGE_TODO_STATUS",
  SET_VISIBILITY_FILTER = "TODO_ASYNC/SET_VISIBILITY_FILTER",
}

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
