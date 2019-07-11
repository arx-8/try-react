import { Todo, TodoId } from "domain/models/Todo"
import { RootState } from "ducks/store"

const filterTodoList = (state: RootState): Todo[] => {
  if (state.todoAsync.visibilityFilter === "all") {
    return state.todoAsync.todoList
  }
  return state.todoAsync.todoList.filter(
    (t) => t.status === state.todoAsync.visibilityFilter
  )
}

const isSomeLoading = (state: RootState): boolean => {
  return (
    state.todoAsync.loading.all ||
    state.todoAsync.loading.add ||
    0 < state.todoAsync.loading.ids.length
  )
}

const isTargetLoading = (state: RootState, targetId?: TodoId): boolean => {
  if (targetId == null) {
    return false
  }
  return state.todoAsync.loading.ids.includes(targetId)
}

const extractEditTarget = (state: RootState): Todo | undefined => {
  const { editTargetId } = state.todoAsync
  return state.todoAsync.todoList.find((t) => t.id === editTargetId)
}

export const selectors = {
  extractEditTarget,
  filterTodoList,
  isSomeLoading,
  isTargetLoading,
}
