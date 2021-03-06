import debounce from "lodash/debounce"
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
} from "src/data/apis/TodoAPIClient"
import { toSerializableError } from "src/domain/errors/SerializableError"
import { TodoId } from "src/domain/models/Todo"
import { AppThunkAction } from "src/types/ReduxTypes"
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

const fetchTodoRequest = (params: CallGetTodoReq): AppThunkAction => {
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

export const openTodoEditDialog = (editTargetId: TodoId): AppThunkAction => {
  return (dispatch) => {
    dispatch(
      actions.setOpenTodoEditDialog({
        editTargetId,
        isOpen: true,
      })
    )
    dispatch(fetchTodoRequest({ id: editTargetId }))
  }
}

export const closeTodoEditDialog = (): AppThunkAction => {
  return (dispatch) => {
    dispatch(actions.setOpenTodoEditDialog({ isOpen: false }))
  }
}
