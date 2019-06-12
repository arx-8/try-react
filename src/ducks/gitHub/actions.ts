import { ActionWithPayloadHandler } from "types/ReduxTypes"
import {
  FetchMembersParams,
  FetchMemberResponse,
  FetchMemberError,
} from "./types"

export enum ActionTypes {
  FETCH_MEMBERS_START = "GITHUB/FETCH_MEMBERS_START",
  FETCH_MEMBERS_SUCCEED = "GITHUB/FETCH_MEMBERS_SUCCEED",
  FETCH_MEMBERS_FAIL = "GITHUB/FETCH_MEMBERS_FAIL",
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

export const actions = {
  fetchMembersStart,
  fetchMembersSucceed,
  fetchMembersFail,
}

export type Action =
  | ReturnType<typeof actions.fetchMembersStart>
  | ReturnType<typeof actions.fetchMembersSucceed>
  | ReturnType<typeof actions.fetchMembersFail>
