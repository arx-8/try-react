import { APP_NAME } from "src/constants/App"
import actionCreatorFactory from "typescript-fsa"

export const ActionTypes = {
  LOGIN: "auth/LOGIN",
  LOGOUT: "auth/LOGOUT",
}

const create = actionCreatorFactory(APP_NAME)

export const login = create(ActionTypes.LOGIN)

export const logout = create(ActionTypes.LOGOUT)
