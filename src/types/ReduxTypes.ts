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
type AppThunkDispatch = ThunkDispatch<RootState, void, AnyAction>

/**
 * redux-thunk action shorthand for this application.
 *
 * ThunkAction の <R> を void | Promise<void> に制約してる理由は、実装の複雑化を避けるため。
 * 「Promise.resolve の結果を受け取って Component 側でロジックを実装」することを防ぐ。
 * 基本的に、return の Promise すら使うべきではないため、型引数省略時のデフォルト値は void としている。
 *
 * @template TReturn Type of return
 * @template TAction Type of acceptable action
 */
export type AppThunkAction<
  TReturn extends void | Promise<void> = void,
  TAction extends Action = AnyAction
> = ThunkAction<TReturn, RootState, void, TAction>

/**
 * redux-thunk compatible MapDispatchToPropsFunction.
 *
 * @see node_modules/@types/react-redux/index.d.ts
 */
export type MapThunkDispatchToPropsFunction<TDispatchProps, TOwnProps> = (
  dispatch: AppThunkDispatch,
  ownProps: TOwnProps
) => TDispatchProps
