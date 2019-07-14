import { Todo } from "domain/models/Todo"
import { TodoState } from "./types"

const filterTodoList = (state: TodoState): Todo[] => {
  if (state.visibilityFilter === "all") {
    return state.todoList
  }
  return state.todoList.filter((t) => t.status === state.visibilityFilter)
}

export const selectors = {
  filterTodoList,
}
