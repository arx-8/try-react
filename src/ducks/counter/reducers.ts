import { Reducer } from "redux"
import { CounterAction, CounterActionType } from "./actions"

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case CounterActionType.ADD:
      return {
        ...state,
        count: state.count + (action.amount || 0),
      }
    case CounterActionType.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      }
    case CounterActionType.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      }
    default: {
      // case の定義忘れ防止のため
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action.type
      return state
    }
  }
}
