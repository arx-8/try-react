import { APP_NAME } from "constants/App"
import actionCreatorFactory from "typescript-fsa"
import { ActionTypes, InputValue } from "./types"

const actionCreator = actionCreatorFactory(APP_NAME)

const clickSquare = actionCreator<{
  index: number
  value: InputValue
}>(ActionTypes.CLICK_SQUARE)

const reset = actionCreator(ActionTypes.RESET)

export const actions = {
  clickSquare,
  reset,
}
