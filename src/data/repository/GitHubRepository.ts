import axios, { AxiosResponse } from "axios"
import { User } from "types/GitHub"

const BASE_URL = "https://api.github.com"

type CallGetMembersRequest = {
  organizationName: string
}

export type CallGetMembersResponse = AxiosResponse<User[]>

export const callGetMembers = (
  params: CallGetMembersRequest
): Promise<CallGetMembersResponse> => {
  return axios.get(`${BASE_URL}/orgs/${params.organizationName}/members`)
}
