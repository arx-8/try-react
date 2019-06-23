import { Todo } from "domain/models/Todo"
import { State } from "./reducers"

const filterTodoList = (state: State): Todo[] => {
  if (state.visibilityFilter === "all") {
    return state.todoList
  }
  return state.todoList.filter((t) => t.status === state.visibilityFilter)
}

const isSomeLoading = (state: State): boolean => {
  return state.loading.all || 0 < state.loading.ids.length
}

export const selectors = {
  filterTodoList,
  isSomeLoading,
}
