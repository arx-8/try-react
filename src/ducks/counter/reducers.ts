import { handleActions, ReduxCompatibleReducer } from "redux-actions"
import { CounterActionType } from "./types"

export type CounterState = {
  count: number
  defaultAmount: number
}

const initialState: CounterState = {
  count: 0,
  defaultAmount: 1,
}

export const reducer: ReduxCompatibleReducer<
  CounterState,
  CounterState
> = handleActions(
  {
    [CounterActionType.ADD]: (state, action) => {
      return {
        ...state,
        count: state.count + action.payload.count,
      }
    },
    [CounterActionType.DECREMENT]: (state) => {
      return {
        ...state,
        count: state.count - 1,
      }
    },
    [CounterActionType.INCREMENT]: (state) => {
      return {
        ...state,
        count: state.count + 1,
      }
    },
    [CounterActionType.CHANGE_DEFAULT_AMOUNT]: (state, action) => {
      return {
        ...state,
        defaultAmount: action.payload.defaultAmount,
      }
    },
  },
  initialState
)
