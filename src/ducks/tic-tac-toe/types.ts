export enum ActionTypes {
  CLICK_SQUARE = "TTT/CLICK_SQUARE",
}

export type InputValue = "O" | "X" | null

export type TTTState = {
  inputValues: InputValue[]
}
