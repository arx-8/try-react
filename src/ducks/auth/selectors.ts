import { State } from "./reducers"

export const isAuthenticated = (state: State): boolean => {
  return !!state.authToken
}
