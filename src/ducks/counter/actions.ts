import { createAction } from "redux-actions"
import { CounterActionType } from "./types"
import { CounterState } from "./reducers"

export const add = createAction(
  CounterActionType.ADD,
  (amount: number): Partial<CounterState> => ({
    count: amount,
  })
)

export const changeDefaultAmount = createAction(
  CounterActionType.CHANGE_DEFAULT_AMOUNT,
  (defaultAmount: number): Partial<CounterState> => ({ defaultAmount })
)

export const decrement = createAction(CounterActionType.DECREMENT)

export const increment = createAction(CounterActionType.INCREMENT)
