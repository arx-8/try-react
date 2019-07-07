import { SerializableError } from "domain/errors/SerializableError"
import { User } from "domain/models/GitHub"

export type GitHubState = Readonly<{
  users: User[]
  isLoading: boolean
  error?: SerializableError
}>

export type FetchMembersParams = {
  companyName: string
}

export type FetchMemberResponse = Readonly<{
  users: User[]
}>

export type FetchMemberError = Readonly<{
  error: SerializableError
}>
