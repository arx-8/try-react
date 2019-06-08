import { ValueOf } from "types/Utils"

type PathDef = {
  Root: "/"
  Counter: "/counter"
  Todo: "/todo"
}

export type PathValueDef = ValueOf<PathDef>

export const PATH: PathDef = {
  Root: "/",
  Counter: "/counter",
  Todo: "/todo",
}
