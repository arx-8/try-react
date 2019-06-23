import {
  callDeleteTodo,
  CallDeleteTodoReq,
  callGetAllTodos,
  callPostTodo,
  CallPostTodoReq,
  callPutTodo,
  CallPutTodoReq,
} from "data/repository/TodoRepository"
import {
  SerializableError,
  toSerializableError,
} from "domain/errors/SerializableError"
import { Todo, TodoId, VisibilityFilter } from "domain/models/Todo"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import actionCreatorFactory from "typescript-fsa"
import { State } from "./reducers"

export enum ActionTypes {
  ADD_TODO = "TODO_ASYNC/ADD_TODO",
  CHANGE_TODO_STATUS = "TODO_ASYNC/CHANGE_TODO_STATUS",
  DELETE_TODO = "TODO_ASYNC/DELETE_TODO",
  FETCH_ALL_TODOS = "TODO_ASYNC/FETCH_ALL_TODOS",
  SET_VISIBILITY_FILTER = "TODO_ASYNC/SET_VISIBILITY_FILTER",
}

const create = actionCreatorFactory()

const addTodo = create.async<CallPostTodoReq, TodoId, SerializableError>(
  ActionTypes.ADD_TODO
)

const addTodoRequest = (
  params: CallPostTodoReq
): ((dispatch: ThunkDispatch<State, undefined, AnyAction>) => Promise<any>) => {
  return async (dispatch) => {
    dispatch(addTodo.started(params))
    try {
      const id = await callPostTodo(params)
      dispatch(addTodo.done({ params, result: id }))
      dispatch(fetchAllTodosRequest())
    } catch (error) {
      dispatch(addTodo.failed({ error: toSerializableError(error), params }))
    }
  }
}

const changeTodoStatus = create.async<
  CallPutTodoReq,
  TodoId,
  SerializableError
>(ActionTypes.CHANGE_TODO_STATUS)

const changeTodoStatusRequest = (
  params: CallPutTodoReq
): ((dispatch: ThunkDispatch<State, undefined, AnyAction>) => Promise<any>) => {
  return async (dispatch) => {
    dispatch(changeTodoStatus.started(params))
    try {
      const id = await callPutTodo(params)
      dispatch(changeTodoStatus.done({ params, result: id }))
      dispatch(fetchAllTodosRequest())
    } catch (error) {
      dispatch(
        changeTodoStatus.failed({ error: toSerializableError(error), params })
      )
    }
  }
}

const deleteTodo = create.async<CallDeleteTodoReq, void, SerializableError>(
  ActionTypes.DELETE_TODO
)

const deleteTodoRequest = (
  params: CallDeleteTodoReq
): ((dispatch: ThunkDispatch<State, undefined, AnyAction>) => Promise<any>) => {
  return async (dispatch) => {
    dispatch(deleteTodo.started(params))
    try {
      await callDeleteTodo(params)
      dispatch(deleteTodo.done({ params }))
      dispatch(fetchAllTodosRequest())
    } catch (error) {
      dispatch(deleteTodo.failed({ error: toSerializableError(error), params }))
    }
  }
}

const fetchAllTodos = create.async<void, Todo[], SerializableError>(
  ActionTypes.FETCH_ALL_TODOS
)

const fetchAllTodosRequest = (): ((
  dispatch: ThunkDispatch<State, undefined, AnyAction>
) => Promise<any>) => {
  return async (dispatch) => {
    dispatch(fetchAllTodos.started())
    try {
      dispatch(fetchAllTodos.done({ result: await callGetAllTodos() }))
    } catch (error) {
      dispatch(fetchAllTodos.failed({ error: toSerializableError(error) }))
    }
  }
}

const setVisibilityFilter = create<{
  visibilityFilter: VisibilityFilter
}>(ActionTypes.SET_VISIBILITY_FILTER)

export const actions = {
  addTodo,
  changeTodoStatus,
  deleteTodo,
  fetchAllTodos,
  setVisibilityFilter,
}
export const requestActions = {
  addTodoRequest,
  changeTodoStatusRequest,
  deleteTodoRequest,
  fetchAllTodosRequest,
}
