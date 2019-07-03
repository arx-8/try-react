import { Todo, TodoId } from "domain/models/Todo"
import { State } from "./reducers"

const filterTodoList = (state: State): Todo[] => {
  if (state.visibilityFilter === "all") {
    return state.todoList
  }
  return state.todoList.filter((t) => t.status === state.visibilityFilter)
}

const isSomeLoading = (state: State): boolean => {
  return state.loading.all || state.loading.add || 0 < state.loading.ids.length
}

const isTargetLoading = (state: State, targetId?: TodoId): boolean => {
  if (targetId == null) {
    return false
  }
  return state.loading.ids.includes(targetId)
}

const extractEditTarget = (state: State): Todo | undefined => {
  const { editTargetId } = state
  return state.todoList.find((t) => t.id === editTargetId)
}

export const selectors = {
  extractEditTarget,
  filterTodoList,
  isSomeLoading,
  isTargetLoading,
}
