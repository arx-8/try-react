import { ValueOf } from "types/Utils"

type PathDef = {
  Root: "/"
  Counter: "/counter"
}

export type PathValueDef = ValueOf<PathDef>

export const PATH: PathDef = {
  Root: "/",
  Counter: "/counter",
}
