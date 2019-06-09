import {
  ADD_TODO,
  CHANGE_TODO_STATUS,
  DELETE_TODO,
  SET_VISIBILITY_FILTER,
  TodoId,
  TodoStatus,
  VisibilityFilter,
} from "./types"
import { ActionWithPayload } from "types/ReduxTypes"

type AddTodoPayload = {
  label: string
}
const addTodo = (
  payload: AddTodoPayload
): ActionWithPayload<typeof ADD_TODO, AddTodoPayload> => ({
  type: ADD_TODO,
  payload,
})

type DeleteTodoPayload = {
  todoId: TodoId
}
const deleteTodo = (
  payload: DeleteTodoPayload
): ActionWithPayload<typeof DELETE_TODO, DeleteTodoPayload> => ({
  type: DELETE_TODO,
  payload,
})

type ChangeTodoStatusPayload = {
  todoId: TodoId
  todoStatus: TodoStatus
}
const changeTodoStatus = (
  payload: ChangeTodoStatusPayload
): ActionWithPayload<typeof CHANGE_TODO_STATUS, ChangeTodoStatusPayload> => ({
  type: CHANGE_TODO_STATUS,
  payload,
})

type SetVisibilityFilterPayload = {
  visibilityFilter: VisibilityFilter
}
const setVisibilityFilter = (
  payload: SetVisibilityFilterPayload
): ActionWithPayload<
  typeof SET_VISIBILITY_FILTER,
  SetVisibilityFilterPayload
> => ({
  type: SET_VISIBILITY_FILTER,
  payload,
})

export const actions = {
  addTodo,
  deleteTodo,
  changeTodoStatus,
  setVisibilityFilter,
}
