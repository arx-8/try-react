import { Todo, TodoId } from "src/domain/models/Todo"
import { State } from "./reducers"

export const filterTodoList = (state: State): Todo[] => {
  if (state.visibilityFilter === "all") {
    return state.todoList
  }
  return state.todoList.filter((t) => t.status === state.visibilityFilter)
}

export const isSomeLoading = (state: State): boolean => {
  return state.loading.all || state.loading.add || 0 < state.loading.ids.length
}

export const isTargetLoading = (state: State, targetId?: TodoId): boolean => {
  if (targetId == null) {
    return false
  }
  return state.loading.ids.includes(targetId)
}

export const extractEditTarget = (state: State): Todo | undefined => {
  const { editTargetId } = state.todoEditDialog
  return state.todoList.find((t) => t.id === editTargetId)
}
