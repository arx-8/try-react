import { Todo, VisibilityFilter } from "domain/models/Todo"

export enum ActionTypes {
  ADD_TODO = "app/todo/ADD_TODO",
  DELETE_TODO = "app/todo/DELETE_TODO",
  CHANGE_TODO_STATUS = "app/todo/CHANGE_TODO_STATUS",
  SET_VISIBILITY_FILTER = "app/todo/SET_VISIBILITY_FILTER",
}

export type TodoState = Readonly<{
  todoList: Todo[]
  visibilityFilter: VisibilityFilter
}>
