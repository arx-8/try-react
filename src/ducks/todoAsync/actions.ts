import {
  callDeleteTodo,
  CallDeleteTodoReq,
  callGetAllTodos,
  callPostTodo,
  CallPostTodoReq,
  callPutTodo,
  CallPutTodoReq,
} from "data/repository/TodoRepository"
import { Todo, TodoId, VisibilityFilter } from "domain/models/Todo"
import actionCreatorFactory from "typescript-fsa"
import { asyncFactory } from "typescript-fsa-redux-thunk"
import { State } from "./reducers"

export enum ActionTypes {
  ADD_TODO = "TODO_ASYNC/ADD_TODO",
  CHANGE_TODO_STATUS = "TODO_ASYNC/CHANGE_TODO_STATUS",
  DELETE_TODO = "TODO_ASYNC/DELETE_TODO",
  FETCH_ALL_TODOS = "TODO_ASYNC/FETCH_ALL_TODOS",
  SET_VISIBILITY_FILTER = "TODO_ASYNC/SET_VISIBILITY_FILTER",
}

const create = actionCreatorFactory()
const createAsync = asyncFactory<State>(create)

const addTodo = createAsync<CallPostTodoReq, TodoId>(
  ActionTypes.ADD_TODO,
  async (params) => {
    return await callPostTodo(params)
  }
)

const changeTodoStatus = createAsync<CallPutTodoReq, TodoId>(
  ActionTypes.CHANGE_TODO_STATUS,
  async (params) => {
    return await callPutTodo(params)
  }
)

const deleteTodo = createAsync<CallDeleteTodoReq, void>(
  ActionTypes.DELETE_TODO,
  async (params) => {
    return await callDeleteTodo(params)
  }
)

const fetchAllTodos = createAsync<void, Todo[]>(
  ActionTypes.FETCH_ALL_TODOS,
  async () => {
    return await callGetAllTodos()
  }
)

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
