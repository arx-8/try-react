import { combineReducers, createStore, Store, AnyAction } from "redux"
import { counterReducer } from "./counter"
import { CounterState } from "./counter/reducers"

export type RootState = {
  counter: CounterState
}

export const configureStore = (
  initialState: any = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers({ counter: counterReducer })

  return createStore(rootReducer, initialState)
}
