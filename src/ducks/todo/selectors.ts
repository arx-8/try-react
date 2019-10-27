import { Todo } from "src/domain/models/Todo"
import { TodoState } from "./types"

export const filterTodoList = (state: TodoState): Todo[] => {
  if (state.visibilityFilter === "all") {
    return state.todoList
  }
  return state.todoList.filter((t) => t.status === state.visibilityFilter)
}
