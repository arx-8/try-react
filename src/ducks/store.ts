import { isDevelopment } from "constants/Env"
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Store,
} from "redux"
import persistState from "redux-localstorage"
import createSagaMiddleware from "redux-saga"
import thunkMiddleWare from "redux-thunk"
import { FixMeAny } from "types/Utils"
import { authReducer, AuthState } from "./auth"
import { counterReducer } from "./counter"
import { CounterState } from "./counter/reducers"
import { gitHubReducer } from "./gitHub"
import { rootSaga } from "./gitHub/saga"
import { GitHubState } from "./gitHub/types"
import { redditReducers } from "./reddit"
import { tttReducer } from "./tic-tac-toe"
import { TTTState } from "./tic-tac-toe/types"
import { todoReducer } from "./todo"
import { TodoState } from "./todo/types"
import { todoAsyncReducer, TodoAsyncState } from "./todoAsync"

export type RootState = Readonly<{
  auth: AuthState
  counter: CounterState
  gitHub: GitHubState
  todo: TodoState
  todoAsync: TodoAsyncState
  ticTacToe: TTTState
  redditPostsBySubreddit: FixMeAny
  redditSelectedSubreddit: FixMeAny
}>

export const configureStore = (
  initialState: Partial<RootState> = {}
): Store<RootState, AnyAction> => {
  const rootReducer = combineReducers<RootState>({
    auth: authReducer,
    counter: counterReducer,
    gitHub: gitHubReducer,
    todo: todoReducer,
    todoAsync: todoAsyncReducer,
    ticTacToe: tttReducer,
    redditPostsBySubreddit: redditReducers.postsBySubreddit,
    redditSelectedSubreddit: redditReducers.selectedSubreddit,
  })

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middleWares = []
  const sagaMiddleWare = createSagaMiddleware()
  middleWares.push(sagaMiddleWare)
  middleWares.push(thunkMiddleWare)
  if (isDevelopment) {
    /* eslint-disable @typescript-eslint/no-var-requires */
    middleWares.push(require("redux-immutable-state-invariant").default())
    const {
      createSerializableStateInvariantMiddleware,
    } = require("redux-starter-kit/dist/redux-starter-kit.esm")
    middleWares.push(createSerializableStateInvariantMiddleware())
    /* eslint-enable @typescript-eslint/no-var-requires */
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares), persistState(["auth"]))
  )

  // Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware
  sagaMiddleWare.run(rootSaga)

  return store
}
