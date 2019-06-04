import { createAction } from "redux-actions"
import { CounterActionType } from "./types"

const add = createAction(CounterActionType.ADD, (amount: number) => ({
  count: amount,
}))
const decrement = createAction(CounterActionType.DECREMENT)
const increment = createAction(CounterActionType.INCREMENT)

export const actions = {
  add,
  decrement,
  increment,
}
