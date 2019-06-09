import { Brand } from "types/Utils"

export const ADD_TODO = "TODO/ADD_TODO"
export const DELETE_TODO = "TODO/DELETE_TODO"
export const CHANGE_TODO_STATUS = "TODO/CHANGE_TODO_STATUS"
export const SET_VISIBILITY_FILTER = "TODO/SET_VISIBILITY_FILTER"

export type TodoId = Brand<string, "TodoId">

export type TodoStatus = "active" | "completed"

export type VisibilityFilter = "all" | TodoStatus

export type Todo = {
  id: TodoId
  label: string
  status: TodoStatus
}
