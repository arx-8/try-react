import { Action } from "redux"

export type ActionWithPayload<T, P> = {
  payload: P
} & Action<T>
