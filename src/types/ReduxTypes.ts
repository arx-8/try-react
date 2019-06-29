import { Action } from "redux"
import { ThunkDispatch } from "redux-thunk"

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

/**
 * ThunkActionCreatorReturn のため、<D> の extends による型安全を保証しつつ、冗長な型引数を減らすための型
 */
type ThunkDispatchGenericsless<
  S = any,
  E = any,
  A extends Action = any
> = ThunkDispatch<S, E, A>

export type ThunkActionCreatorReturn<D extends ThunkDispatchGenericsless> = (
  dispatch: D
) => Promise<any>
