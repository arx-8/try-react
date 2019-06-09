import { combineReducers, createStore, Store, AnyAction } from "redux"
import { counterReducer } from "./counter"
import { CounterState } from "./counter/reducers"
import { TodoState } from "./todo/reducers"
import { todoReducer } from "./todo"

export type RootState = {
  counter: CounterState
  todo: TodoState
}

export const configureStore = (
  initialState: any = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
  })

  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
