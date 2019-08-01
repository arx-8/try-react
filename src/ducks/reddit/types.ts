import { FixMeAny } from "types/Utils"

export type PostsBySubredditState = {
  isFetching: boolean
  didInvalidate: boolean
  items: FixMeAny[]
}

export type SelectedSubredditState = string
