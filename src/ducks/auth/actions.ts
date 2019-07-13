import actionCreatorFactory from "typescript-fsa"

const DOMAIN = "auth"

export enum ActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
}

const create = actionCreatorFactory(DOMAIN)

const login = create(ActionTypes.LOGIN)
const logout = create(ActionTypes.LOGOUT)

export const actions = {
  login,
  logout,
}
