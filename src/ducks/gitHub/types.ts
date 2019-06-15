import { AxiosError } from "axios"
import { User } from "types/GitHub"

export type GitHubState = Readonly<{
  users: User[]
  isLoading: boolean
  error: AxiosError | null
}>

export type FetchMembersParams = {
  companyName: string
}

export type FetchMemberResponse = Readonly<{
  users: User[]
}>

export type FetchMemberError = Readonly<{
  error: AxiosError
}>
