import { ActionHandler, ActionWithPayloadHandler } from "src/types/ReduxTypes"
import {
  FetchMemberError,
  FetchMemberResponse,
  FetchMembersParams,
} from "./types"

export const ActionTypes = {
  FETCH_MEMBERS_START: "app/gitHub/FETCH_MEMBERS_START",
  FETCH_MEMBERS_SUCCEED: "app/gitHub/FETCH_MEMBERS_SUCCEED",
  FETCH_MEMBERS_FAIL: "app/gitHub/FETCH_MEMBERS_FAIL",
  INITIALIZE_MEMBERS: "app/gitHub/INITIALIZE_MEMBERS",
} as const

export const fetchMembersStart: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_START,
  FetchMembersParams
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_START,
  payload,
})

export const fetchMembersSucceed: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_SUCCEED,
  FetchMembersParams & FetchMemberResponse
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_SUCCEED,
  payload,
})

export const fetchMembersFail: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_FAIL,
  FetchMembersParams & FetchMemberError
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_FAIL,
  payload,
})

export const initializeMembers: ActionHandler<
  typeof ActionTypes.INITIALIZE_MEMBERS
> = () => ({
  type: ActionTypes.INITIALIZE_MEMBERS,
})

export type Action =
  | ReturnType<typeof fetchMembersStart>
  | ReturnType<typeof fetchMembersSucceed>
  | ReturnType<typeof fetchMembersFail>
  | ReturnType<typeof initializeMembers>
