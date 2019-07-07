import { Action, ActionTypes } from "./actions"
import { GitHubState } from "./types"
import { Reducer } from "redux"
import produce from "immer"

export const initialState: GitHubState = {
  users: [],
  isLoading: false,
  error: undefined,
}

export const reducer: Reducer<GitHubState, Action> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.FETCH_MEMBERS_START:
      return produce(state, (draft) => {
        draft.isLoading = true
      })

    case ActionTypes.FETCH_MEMBERS_SUCCEED:
      return produce(state, (draft) => {
        const { users } = action.payload
        draft.users = users
        draft.isLoading = false
      })

    case ActionTypes.FETCH_MEMBERS_FAIL:
      return produce(state, (draft) => {
        const { error } = action.payload
        draft.error = error
        draft.isLoading = false
      })

    case ActionTypes.INITIALIZE_MEMBERS:
      return produce(state, (draft) => {
        draft.users = []
      })

    default: {
      // case の定義忘れ防止のため
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action
      return state
    }
  }
}
