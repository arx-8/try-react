import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux"
import createSagaMiddleware from "redux-saga"
import thunkMiddleWare from "redux-thunk"
import { counterReducer } from "./counter"
import { CounterState } from "./counter/reducers"
import { gitHubReducer } from "./gitHub"
import { rootSaga } from "./gitHub/saga"
import { GitHubState } from "./gitHub/types"
import { tttReducer } from "./tic-tac-toe"
import { TTTState } from "./tic-tac-toe/types"
import { todoReducer } from "./todo"
import { TodoState } from "./todo/types"
import { todoAsyncReducer, TodoAsyncState } from "./todoAsync"

export type RootState = {
  counter: CounterState
  gitHub: GitHubState
  todo: TodoState
  todoAsync: TodoAsyncState
  ticTacToe: TTTState
}

export const configureStore = (
  initialState: any = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers({
    counter: counterReducer,
    gitHub: gitHubReducer,
    todo: todoReducer,
    todoAsync: todoAsyncReducer,
    ticTacToe: tttReducer,
  })

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const sagaMiddleWare = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleWare, thunkMiddleWare))
  )

  // Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware
  sagaMiddleWare.run(rootSaga)

  return store
}
