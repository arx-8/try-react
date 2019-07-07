import { RootState } from "ducks/store"
import { Action } from "redux"
import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"

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
 * redux-thunk dispatch shorthand for this application.
 *
 * State と extraArgument は、applyMiddleware の時点で決定するため、決め打ち
 * Action は型定義するコスパが悪い(ActionCreatorを使うため、タイポや未定義の可能性は低い)ため、AnyAction
 */
export type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

/**
 * redux-thunk action shorthand for this application.
 *
 * ThunkAction の <R> を Promise<void> をデフォルトにしてる理由は下記。
 * - 複雑化を避けるため、thunk を使う action は非同期処理のみとするため
 * - 複雑化を避けるため、Promise.resolve の結果を受け取って Component 側でロジックを実装することを防ぐため
 *
 * @template TReturn type of return
 * @template TAction acceptable action type
 */
export type AppThunkAction<
  TReturn = Promise<void>,
  TAction extends Action = AnyAction
> = ThunkAction<TReturn, RootState, void, TAction>

/**
 * redux-thunk compatible MapDispatchToPropsFunction.
 *
 * @see node_modules/@types/react-redux/index.d.ts
 */
export type MapDispatchToPropsFunction<TDispatch, TOwnProps, TDispatchProps> = (
  dispatch: TDispatch,
  ownProps: TOwnProps
) => TDispatchProps
