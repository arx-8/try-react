import { clickSquare } from "./actions"
import { range } from "utils/ArrayUtils"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import { TTTState } from "./types"
import produce from "immer"

export const initialState: TTTState = {
  currentPlayerName: "O",
  inputValues: range(9).map(() => null),
}

export const reducer = reducerWithInitialState(initialState).case(
  clickSquare,
  (state, payload) => {
    return produce(state, (draft) => {
      draft.currentPlayerName = state.currentPlayerName === "O" ? "X" : "O"
      draft.inputValues[payload.index] = payload.value
    })
  }
)
