import { AxiosError, AxiosResponse } from "axios"
import dayjs, { Dayjs } from "dayjs"
import { Todo, TodoId } from "src/domain/models/Todo"
import { AllowedAny } from "src/types/Utils"
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

/**
 * 疑似APIエラーのため、奇数分の間Errorを投げる
 */
const throwErrorIfErrorTime = (): void => {
  if (!isErrorTime(dayjs())) {
    return
  }
  throw new Error("Mock API Error! Should call even number minute.")
}

export const isErrorTime = (now: Dayjs): boolean => {
  return now.minute() % 2 !== 0
}

const toMockAxiosResp = <T>(data: T): AxiosResponse<T> => {
  return {
    data,
    status: 200,
    statusText: "200OK",
    headers: null,
    config: null as AllowedAny,
  }
}
const toMockAxiosError = <T>(
  request: AllowedAny,
  response: AxiosResponse<T>,
  code: string,
  message: string
): AxiosError<T> => {
  return {
    code,
    config: null as AllowedAny,
    isAxiosError: true,
    message,
    name: "AxiosError",
    request,
    response,
  }
}

const STORAGE_KEY = "todo-async/todos"

/**
 * Get
 */
export const callGetAllTodos = async (): Promise<Todo[]> => {
  console.log("API call start: callGetAllTodos")
  await sleep(3000)
  console.log("API call end: callGetAllTodos")
  throwErrorIfErrorTime()

  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  return callGetAllTodosToModels(resp)
}

const callGetAllTodosToModels = (
  resp: AxiosResponse<string | null>
): Todo[] => {
  if (resp.data == null) {
    return []
  }
  return JSON.parse(resp.data)
}

export type CallGetTodoReq = {
  id: TodoId
}

export const callGetTodo = async (params: CallGetTodoReq): Promise<Todo> => {
  console.log("API call start: callGetTodo")
  await sleep(3000)
  console.log("API call end: callGetTodo")
  throwErrorIfErrorTime()

  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)
  const t = todos.find((t) => t.id === params.id)
  if (t == null) {
    const resp = toMockAxiosResp(t)
    resp.status = 404
    throw toMockAxiosError(params, resp, "404", "Specified TODO not found")
  }
  return t
}

/**
 * Post
 */
export type CallPostTodoReq = Omit<Todo, "id">

export const callPostTodo = async (
  params: CallPostTodoReq
): Promise<TodoId> => {
  console.log("API call start: callPostTodo")
  await sleep(3000)
  console.log("API call end: callPostTodo")
  throwErrorIfErrorTime()

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
export type CallPutTodoReq = Partial<Todo> & {
  id: TodoId
}

export const callPutTodo = async (params: CallPutTodoReq): Promise<TodoId> => {
  console.log("API call start: callPutTodo")
  await sleep(3000)
  console.log("API call end: callPutTodo")
  throwErrorIfErrorTime()

  // get
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)
  const todo = todos.find((t) => t.id === params.id)!

  // update
  if (params.label) {
    todo.label = params.label
  }
  if (params.status) {
    todo.status = params.status
  }

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
  console.log("API call start: callDeleteTodo")
  await sleep(3000)
  console.log("API call end: callDeleteTodo")
  throwErrorIfErrorTime()

  // get
  const resp = toMockAxiosResp(localStorage.getItem(STORAGE_KEY))
  const todos = callGetAllTodosToModels(resp)

  // delete
  const deleted = todos.filter((t) => t.id !== params.id)

  // write
  localStorage.setItem(STORAGE_KEY, JSON.stringify(deleted))
}
