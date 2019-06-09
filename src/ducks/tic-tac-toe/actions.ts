import { ActionTypes, InputValue } from "./types"
import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory()

export const clickSquare = actionCreator<{
  index: number
  value: InputValue
}>(ActionTypes.CLICK_SQUARE)

export const actions = {
  clickSquare,
}
