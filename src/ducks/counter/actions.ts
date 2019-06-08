import { createAction } from "redux-actions"
import { CounterActionType } from "./types"
import { CounterState } from "./reducers"

const add = createAction(
  CounterActionType.ADD,
  (amount: number): Partial<CounterState> => ({
    count: amount,
  })
)
const changeDefaultAmount = createAction(
  CounterActionType.CHANGE_DEFAULT_AMOUNT,
  (defaultAmount: number): Partial<CounterState> => ({ defaultAmount })
)
const decrement = createAction(CounterActionType.DECREMENT)
const increment = createAction(CounterActionType.INCREMENT)

export const actions = {
  add,
  changeDefaultAmount,
  decrement,
  increment,
}
