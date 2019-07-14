import { ActionWithPayloadHandler, ActionHandler } from "types/ReduxTypes"
import {
  FetchMembersParams,
  FetchMemberResponse,
  FetchMemberError,
} from "./types"

export enum ActionTypes {
  FETCH_MEMBERS_START = "app/gitHub/FETCH_MEMBERS_START",
  FETCH_MEMBERS_SUCCEED = "app/gitHub/FETCH_MEMBERS_SUCCEED",
  FETCH_MEMBERS_FAIL = "app/gitHub/FETCH_MEMBERS_FAIL",
  INITIALIZE_MEMBERS = "app/gitHub/INITIALIZE_MEMBERS",
}

const fetchMembersStart: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_START,
  FetchMembersParams
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_START,
  payload,
})

const fetchMembersSucceed: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_SUCCEED,
  FetchMembersParams & FetchMemberResponse
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_SUCCEED,
  payload,
})

const fetchMembersFail: ActionWithPayloadHandler<
  typeof ActionTypes.FETCH_MEMBERS_FAIL,
  FetchMembersParams & FetchMemberError
> = (payload) => ({
  type: ActionTypes.FETCH_MEMBERS_FAIL,
  payload,
})

const initializeMembers: ActionHandler<
  typeof ActionTypes.INITIALIZE_MEMBERS
> = () => ({
  type: ActionTypes.INITIALIZE_MEMBERS,
})

export const actions = {
  fetchMembersStart,
  fetchMembersSucceed,
  fetchMembersFail,
  initializeMembers,
}

export type Action =
  | ReturnType<typeof actions.fetchMembersStart>
  | ReturnType<typeof actions.fetchMembersSucceed>
  | ReturnType<typeof actions.fetchMembersFail>
  | ReturnType<typeof actions.initializeMembers>
