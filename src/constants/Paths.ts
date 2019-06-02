import { ValueOf } from "types/Utils"

type PathDef = {
  Root: "/"
}

export type PathValueDef = ValueOf<PathDef>

export const PATH: PathDef = {
  Root: "/",
}
