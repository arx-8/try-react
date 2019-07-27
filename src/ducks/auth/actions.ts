import { APP_NAME } from "constants/App"
import actionCreatorFactory from "typescript-fsa"

export enum ActionTypes {
  LOGIN = "auth/LOGIN",
  LOGOUT = "auth/LOGOUT",
}

const create = actionCreatorFactory(APP_NAME)

export const login = create(ActionTypes.LOGIN)

export const logout = create(ActionTypes.LOGOUT)
