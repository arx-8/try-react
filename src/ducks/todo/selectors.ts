import { Todo } from "domain/models/Todo"
import { RootState } from "ducks/store"

const filterTodoList = (state: RootState): Todo[] => {
  if (state.todo.visibilityFilter === "all") {
    return state.todo.todoList
  }
  return state.todo.todoList.filter(
    (t) => t.status === state.todo.visibilityFilter
  )
}

export const selectors = {
  filterTodoList,
}
