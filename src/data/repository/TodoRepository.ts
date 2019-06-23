import { AxiosResponse } from "axios"
import { Todo, TodoId } from "domain/models/Todo"
import { ulid } from "ulid"

const createTodoId = (): TodoId => {
  return ulid() as TodoId
}

/**
 * 疑似API通信のため
 */
const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}

const STORAGE_KEY = "todo-async/todos"

/**
 * Get
 */
export const callGetAllTodos = async (): Promise<Todo[]> => {
  await sleep(3000)
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  return callGetAllTodosToModels(resp)
}

const toMockAxiosResp = <T>(data: T): AxiosResponse<T> => {
  return {
    data,
    status: 200,
    statusText: "200OK",
    headers: null,
    config: null as any,
  }
}

const callGetAllTodosToModels = (
  resp: AxiosResponse<string | null>
): Todo[] => {
  if (resp.data == null) {
    return []
  }
  return JSON.parse(resp.data)
}

/**
 * Post
 */
export type CallPostTodoReq = Omit<Todo, "id">

export const callPostTodo = async (
  params: CallPostTodoReq
): Promise<TodoId> => {
  await sleep(3000)

  // get
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)

  // write
  const data = {
    id: createTodoId(),
    label: params.label,
    status: params.status,
  }
  todos.push(data)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

  return data.id
}

/**
 * Update
 */
export type CallPutTodoReq = Todo

export const callPutTodo = async (params: CallPutTodoReq): Promise<TodoId> => {
  await sleep(3000)

  // get
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)
  const todo = todos.find((t) => t.id === params.id)!

  // update
  todo.label = params.label
  todo.status = params.status

  // write
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

  return todo.id
}

/**
 * Delete
 */
export type CallDeleteTodoReq = {
  id: TodoId
}

export const callDeleteTodo = async (
  params: CallDeleteTodoReq
): Promise<void> => {
  await sleep(3000)

  // get
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)

  // delete
  const deleted = todos.filter((t) => t.id !== params.id)

  // write
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deleted))
}
