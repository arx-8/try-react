import { ActionTypes, InputValue } from "./types"
import actionCreatorFactory from "typescript-fsa"

const actionCreator = actionCreatorFactory()

const clickSquare = actionCreator<{
  index: number
  value: InputValue
}>(ActionTypes.CLICK_SQUARE)

const reset = actionCreator(ActionTypes.RESET)

export const actions = {
  clickSquare,
  reset,
}
