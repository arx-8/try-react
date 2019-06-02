import { combineReducers, createStore, Store, AnyAction } from "redux"
import { counterReducer } from "./counter/reducers"

export type RootState = {
  counterReducer: ReturnType<typeof counterReducer>
}

export const configureStore = (
  initialState: any = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers({ counterReducer })

  return createStore(rootReducer, initialState)
}
