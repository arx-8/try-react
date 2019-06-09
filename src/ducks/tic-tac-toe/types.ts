export enum ActionTypes {
  CLICK_SQUARE = "TTT/CLICK_SQUARE",
  RESET = "TTT/RESET",
}

export type InputValue = "O" | "X" | null

export type TTTState = {
  currentPlayerName: InputValue
  inputValues: InputValue[]
}
