import { Brand } from "src/types/Utils"

export type TodoId = Brand<string, "TodoId">

export type TodoStatus = "active" | "completed"

export type Todo = {
  id: TodoId
  label: string
  status: TodoStatus
}

export type VisibilityFilter = "all" | TodoStatus

export const VisibilityFilterValue: Record<
  VisibilityFilter,
  VisibilityFilter
> = {
  active: "active",
  all: "all",
  completed: "completed",
}
