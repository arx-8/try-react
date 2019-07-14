export enum ActionTypes {
  CLICK_SQUARE = "tic-tac-toe/CLICK_SQUARE",
  RESET = "tic-tac-toe/RESET",
}

export type InputValue = "O" | "X" | null

export type PlayerName = NonNullable<InputValue>

export type TTTState = Readonly<{
  currentPlayerName: PlayerName
  winnerPlayerName: PlayerName | null
  inputValues: InputValue[]
  isContinue: boolean
}>
