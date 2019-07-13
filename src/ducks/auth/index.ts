import { actions } from "./actions"
import { operations } from "./operations"
import { reducer, State } from "./reducers"
import { selectors } from "./selectors"

export const authActions = actions
export const authOperations = operations
export const authReducer = reducer
export const authSelectors = selectors
export type AuthState = State
