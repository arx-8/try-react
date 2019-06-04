import { handleActions } from "redux-actions"
import { CounterActionType } from "./types"

export type CounterState = {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

export const reducer = handleActions(
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
  },
  initialState
)
