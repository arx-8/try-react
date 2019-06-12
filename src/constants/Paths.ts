import { ValueOf } from "types/Utils"

type PathDef = {
  Root: "/"
  Counter: "/counter"
  Todo: "/todo"
  TicTacToe: "/tic-tac-toe"
  Members: "/members"
}

export type PathValueDef = ValueOf<PathDef>

export const PATH: PathDef = {
  Root: "/",
  Counter: "/counter",
  Todo: "/todo",
  TicTacToe: "/tic-tac-toe",
  Members: "/members",
}
