import { APP_NAME } from "constants/App"
import {
  CallDeleteTodoReq,
  CallGetTodoReq,
  CallPostTodoReq,
  CallPutTodoReq,
} from "data/apis/TodoAPIClient"
import { SerializableError } from "domain/errors/SerializableError"
import { Todo, TodoId, VisibilityFilter } from "domain/models/Todo"
import actionCreatorFactory from "typescript-fsa"

export const ActionTypes = {
  ADD_TODO: "todoAsync/ADD_TODO",
  CHANGE_TODO_STATUS: "todoAsync/CHANGE_TODO_STATUS",
  DELETE_TODO: "todoAsync/DELETE_TODO",
  FETCH_ALL_TODOS: "todoAsync/FETCH_ALL_TODOS",
  FETCH_TODO: "todoAsync/FETCH_TODO",
  SET_VISIBILITY_FILTER: "todoAsync/SET_VISIBILITY_FILTER",
  SET_OPEN_TODO_EDIT_DIALOG: "todoAsync/SET_OPEN_TODO_EDIT_DIALOG",
}

const create = actionCreatorFactory(APP_NAME)

export const addTodo = create.async<CallPostTodoReq, TodoId, SerializableError>(
  ActionTypes.ADD_TODO
)

export const updateTodo = create.async<
  CallPutTodoReq,
  TodoId,
  SerializableError
>(ActionTypes.CHANGE_TODO_STATUS)

export const deleteTodo = create.async<
  CallDeleteTodoReq,
  void,
  SerializableError
>(ActionTypes.DELETE_TODO)

export const fetchTodo = create.async<CallGetTodoReq, Todo, SerializableError>(
  ActionTypes.FETCH_TODO
)

export const fetchAllTodos = create.async<void, Todo[], SerializableError>(
  ActionTypes.FETCH_ALL_TODOS
)

export const setOpenTodoEditDialog = create<{
  editTargetId?: TodoId
  isOpen: boolean
}>(ActionTypes.SET_OPEN_TODO_EDIT_DIALOG)

export const setVisibilityFilter = create<{
  visibilityFilter: VisibilityFilter
}>(ActionTypes.SET_VISIBILITY_FILTER)
