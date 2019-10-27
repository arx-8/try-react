import produce from "immer"
import { range } from "src/utils/ArrayUtils"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import * as actions from "./actions"
import { InputValue, PlayerName, TTTState } from "./types"

export const initialState: TTTState = {
  currentPlayerName: "O",
  winnerPlayerName: null,
  inputValues: range(9).map(() => null),
  isContinue: true,
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.clickSquare, (state, payload) => {
    return produce(state, (draft) => {
      draft.currentPlayerName = state.currentPlayerName === "O" ? "X" : "O"
      draft.inputValues[payload.index] = payload.value

      // 判定は入力後
      draft.winnerPlayerName = calculateWinner(draft.inputValues)
      draft.isContinue = draft.winnerPlayerName == null
    })
  })
  .case(actions.reset, () => {
    return produce(initialState, () => {
      // NOP
    })
  })

const calculateWinner = (squares: InputValue[]): PlayerName | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
