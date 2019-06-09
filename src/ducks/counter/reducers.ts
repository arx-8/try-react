import { actions } from "./actions"
import { CounterActionType } from "./types"
import { handleActions, ReduxCompatibleReducer } from "redux-actions"
import produce from "immer"

export type CounterState = {
  count: number
  defaultAmount: number
}

// redux-actions の型がうまく書けない。だいぶダメな感じ。
type Action =
  | ReturnType<
      | typeof actions.add
      | typeof actions.changeDefaultAmount
      | typeof actions.decrement
      | typeof actions.increment
    >
  | any

export const initialState: CounterState = {
  count: 0,
  defaultAmount: 1,
}

export const reducer: ReduxCompatibleReducer<
  CounterState,
  Action
> = handleActions(
  {
    [CounterActionType.ADD]: (state, action) => {
      return produce(state, (draft) => {
        draft.count = state.count + action.payload.count
      })
    },
    [CounterActionType.DECREMENT]: (state) => {
      return produce(state, (draft) => {
        draft.count = state.count - 1
      })
    },
    [CounterActionType.INCREMENT]: (state) => {
      return produce(state, (draft) => {
        draft.count = state.count + 1
      })
    },
    [CounterActionType.CHANGE_DEFAULT_AMOUNT]: (state, action) => {
      return produce(state, (draft) => {
        draft.defaultAmount = action.payload.defaultAmount
      })
    },
  },
  initialState
)
