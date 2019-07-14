import { APP_NAME } from "constants/App"
import actionCreatorFactory from "typescript-fsa"

export enum ActionTypes {
  LOGIN = "auth/LOGIN",
  LOGOUT = "auth/LOGOUT",
}

const create = actionCreatorFactory(APP_NAME)

const login = create(ActionTypes.LOGIN)
const logout = create(ActionTypes.LOGOUT)

export const actions = {
  login,
  logout,
}
