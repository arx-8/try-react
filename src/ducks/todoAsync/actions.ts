import {
  callDeleteTodo,
  CallDeleteTodoReq,
  callGetAllTodos,
  callGetTodo,
  CallGetTodoReq,
  callPostTodo,
  CallPostTodoReq,
  callPutTodo,
  CallPutTodoReq,
} from "data/apis/TodoAPIClient"
import {
  SerializableError,
  toSerializableError,
} from "domain/errors/SerializableError"
import { Todo, TodoId, VisibilityFilter } from "domain/models/Todo"
import debounce from "lodash/debounce"
import { AppThunkAction } from "types/ReduxTypes"
import actionCreatorFactory from "typescript-fsa"

const DOMAIN = "TODO_ASYNC"

export enum ActionTypes {
  ADD_TODO = "ADD_TODO",
  CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS",
  DELETE_TODO = "DELETE_TODO",
  FETCH_ALL_TODOS = "FETCH_ALL_TODOS",
  FETCH_TODO = "FETCH_TODO",
  SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER",
  SET_EDIT_TARGET_ID = "SET_EDIT_TARGET_ID",
}

const create = actionCreatorFactory(DOMAIN)

const addTodo = create.async<CallPostTodoReq, TodoId, SerializableError>(
  ActionTypes.ADD_TODO
)

const addTodoRequest = (params: CallPostTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(addTodo.started(params))
    try {
      const id = await callPostTodo(params)
      dispatch(addTodo.done({ params, result: id }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(addTodo.failed({ error: toSerializableError(error), params }))
    }
  }
}

const updateTodo = create.async<CallPutTodoReq, TodoId, SerializableError>(
  ActionTypes.CHANGE_TODO_STATUS
)

const updateTodoRequest = (params: CallPutTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(updateTodo.started(params))
    try {
      const id = await callPutTodo(params)
      dispatch(updateTodo.done({ params, result: id }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(updateTodo.failed({ error: toSerializableError(error), params }))
    }
  }
}

const deleteTodo = create.async<CallDeleteTodoReq, void, SerializableError>(
  ActionTypes.DELETE_TODO
)

const deleteTodoRequest = (params: CallDeleteTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(deleteTodo.started(params))
    try {
      await callDeleteTodo(params)
      dispatch(deleteTodo.done({ params }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(deleteTodo.failed({ error: toSerializableError(error), params }))
    }
  }
}

const fetchTodo = create.async<CallGetTodoReq, Todo, SerializableError>(
  ActionTypes.FETCH_TODO
)

const fetchTodoRequest = (params: CallGetTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(fetchTodo.started(params))
    try {
      dispatch(fetchTodo.done({ result: await callGetTodo(params), params }))
    } catch (error) {
      dispatch(
        fetchTodo.failed({
          error: toSerializableError(error, error.code),
          params,
        })
      )
    }
  }
}

const fetchAllTodos = create.async<void, Todo[], SerializableError>(
  ActionTypes.FETCH_ALL_TODOS
)

/**
 * debounceなしで実行
 */
const fetchAllTodosRequest = (): AppThunkAction => {
  return fetchAllTodosRequestActInner
}

/**
 * debounceありで実行
 */
const fetchAllTodosRequestDebounce = (): AppThunkAction => {
  return fetchAllTodosRequestDebounceMemo
}

const fetchAllTodosRequestActInner: AppThunkAction = async (dispatch) => {
  dispatch(fetchAllTodos.started())
  try {
    dispatch(fetchAllTodos.done({ result: await callGetAllTodos() }))
  } catch (error) {
    dispatch(fetchAllTodos.failed({ error: toSerializableError(error) }))
  }
}

/**
 * debounce可能にするためのメモ化
 */
const fetchAllTodosRequestDebounceMemo = debounce(
  fetchAllTodosRequestActInner,
  500
)

const setEditTargetId = create<{
  editTargetId?: TodoId
}>(ActionTypes.SET_EDIT_TARGET_ID)

const setVisibilityFilter = create<{
  visibilityFilter: VisibilityFilter
}>(ActionTypes.SET_VISIBILITY_FILTER)

/**
 * plain actions
 */
export const actions = {
  addTodo,
  deleteTodo,
  fetchAllTodos,
  fetchTodo,
  setEditTargetId,
  setVisibilityFilter,
  updateTodo,
}

/**
 * thunk actions
 */
export const requestActions = {
  addTodoRequest,
  deleteTodoRequest,
  fetchAllTodosRequest,
  fetchAllTodosRequestDebounce,
  fetchTodoRequest,
  updateTodoRequest,
}
