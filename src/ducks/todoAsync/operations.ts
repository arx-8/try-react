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
import { toSerializableError } from "domain/errors/SerializableError"
import debounce from "lodash/debounce"
import { AppThunkAction } from "types/ReduxTypes"
import * as actions from "./actions"

export const addTodoRequest = (params: CallPostTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(actions.addTodo.started(params))
    try {
      const id = await callPostTodo(params)
      dispatch(actions.addTodo.done({ params, result: id }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(
        actions.addTodo.failed({ error: toSerializableError(error), params })
      )
    }
  }
}

/**
 * debounceなしで実行
 */
export const fetchAllTodosRequest = (): AppThunkAction => {
  return fetchAllTodosRequestActInner
}

/**
 * debounceありで実行
 */
export const fetchAllTodosRequestDebounce = (): AppThunkAction => {
  return fetchAllTodosRequestDebounceMemo
}

const fetchAllTodosRequestActInner: AppThunkAction = async (dispatch) => {
  dispatch(actions.fetchAllTodos.started())
  try {
    dispatch(actions.fetchAllTodos.done({ result: await callGetAllTodos() }))
  } catch (error) {
    dispatch(
      actions.fetchAllTodos.failed({ error: toSerializableError(error) })
    )
  }
}

/**
 * debounce可能にするためのメモ化
 */
const fetchAllTodosRequestDebounceMemo = debounce(
  fetchAllTodosRequestActInner,
  500
)

export const deleteTodoRequest = (
  params: CallDeleteTodoReq
): AppThunkAction => {
  return async (dispatch) => {
    dispatch(actions.deleteTodo.started(params))
    try {
      await callDeleteTodo(params)
      dispatch(actions.deleteTodo.done({ params }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(
        actions.deleteTodo.failed({ error: toSerializableError(error), params })
      )
    }
  }
}

export const updateTodoRequest = (params: CallPutTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(actions.updateTodo.started(params))
    try {
      const id = await callPutTodo(params)
      dispatch(actions.updateTodo.done({ params, result: id }))
      dispatch(fetchAllTodosRequestDebounce())
    } catch (error) {
      dispatch(
        actions.updateTodo.failed({ error: toSerializableError(error), params })
      )
    }
  }
}

export const fetchTodoRequest = (params: CallGetTodoReq): AppThunkAction => {
  return async (dispatch) => {
    dispatch(actions.fetchTodo.started(params))
    try {
      dispatch(
        actions.fetchTodo.done({ result: await callGetTodo(params), params })
      )
    } catch (error) {
      dispatch(
        actions.fetchTodo.failed({
          error: toSerializableError(error, error.code),
          params,
        })
      )
    }
  }
}

export const setVisibilityFilter = actions.setVisibilityFilter

export const setEditTargetId = actions.setEditTargetId
