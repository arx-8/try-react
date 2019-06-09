import { Brand } from "types/Utils"

export enum ActionTypes {
  ADD_TODO = "TODO/ADD_TODO",
  DELETE_TODO = "TODO/DELETE_TODO",
  CHANGE_TODO_STATUS = "TODO/CHANGE_TODO_STATUS",
  SET_VISIBILITY_FILTER = "TODO/SET_VISIBILITY_FILTER",
}

export type TodoId = Brand<string, "TodoId">

export type TodoStatus = "active" | "completed"

export type Todo = {
  id: TodoId
  label: string
  status: TodoStatus
}

export type VisibilityFilter = "all" | TodoStatus

export type TodoState = {
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
}

export const VisibilityFilterValue: Record<
  VisibilityFilter,
  VisibilityFilter
> = {
  active: "active",
  all: "all",
  completed: "completed",
}
