import { FixMeAny } from "src/types/Utils"

export type PostsBySubredditState = {
  isFetching: boolean
  didInvalidate: boolean
  items: FixMeAny[]
}

export type SelectedSubredditState = string
