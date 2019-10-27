import produce from "immer"
import { AuthToken } from "src/domain/models/Auth"
import { reducerWithInitialState } from "typescript-fsa-reducers"
import * as actions from "./actions"

export type State = Readonly<{
  authToken?: AuthToken
}>

export const initialState: State = {
  authToken: undefined,
}

export const reducer = reducerWithInitialState(initialState)
  .case(actions.login, (state) => {
    return produce(state, (draft) => {
      draft.authToken = "any auth token" as AuthToken
    })
  })
  .case(actions.logout, (state) => {
    return produce(state, (draft) => {
      draft.authToken = undefined
    })
  })
  .build()
