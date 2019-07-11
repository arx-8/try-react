import { Todo, VisibilityFilter } from "domain/models/Todo"

export enum ActionTypes {
  ADD_TODO = "TODO/ADD_TODO",
  DELETE_TODO = "TODO/DELETE_TODO",
  CHANGE_TODO_STATUS = "TODO/CHANGE_TODO_STATUS",
  SET_VISIBILITY_FILTER = "TODO/SET_VISIBILITY_FILTER",
}

export type TodoState = Readonly<{
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
}>
