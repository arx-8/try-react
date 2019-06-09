import { Action } from "redux"

/**
 * Redux関係の型定義
 */

/**
 * @template T type
 */
export type ActionHandler<T> = () => Action<T>

type ActionWithPayload<T, P> = {
  payload: P
} & Action<T>

/**
 * @template T type
 * @template P payload
 */
export type ActionWithPayloadHandler<T, P> = (
  payload: P
) => ActionWithPayload<T, P>
