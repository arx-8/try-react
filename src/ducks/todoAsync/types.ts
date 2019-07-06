import { ThunkAction, ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
import { State } from "./reducers"

export type TodoAsyncDispatch = ThunkDispatch<State, undefined, AnyAction>

export type TodoAsyncThunkAction = ThunkAction<
  Promise<void>,
  State,
  void,
  AnyAction
>
