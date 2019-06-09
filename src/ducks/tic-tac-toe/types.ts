export enum ActionTypes {
  CLICK_SQUARE = "TTT/CLICK_SQUARE",
  RESET = "TTT/RESET",
}

export type InputValue = "O" | "X" | null

export type PlayerName = NonNullable<InputValue>

export type TTTState = {
  currentPlayerName: PlayerName
  winnerPlayerName: PlayerName | null
  inputValues: InputValue[]
  isContinue: boolean
}
