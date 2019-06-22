import { actions } from "./actions"
import { operations } from "./operations"
import { reducer, State } from "./reducers"
import { selectors } from "./selectors"

export const todoAsyncActions = actions
export const todoAsyncOperations = operations
export const todoAsyncReducer = reducer
export const todoAsyncSelectors = selectors
export type TodoAsyncState = State
