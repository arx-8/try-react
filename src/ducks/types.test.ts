import { toUniq } from "utils/ArrayUtils"
import { ActionTypes as AuthActionTypes } from "./auth/actions"
import { CounterActionType } from "./counter/types"
import { ActionTypes as GitHubActionTypes } from "./gitHub/actions"
import { ActionTypes as RedditActionTypes } from "./reddit/actions"
import { ActionTypes as TttActionTypes } from "./tic-tac-toe/types"
import { ActionTypes as TodoActionTypes } from "./todo/types"
import { ActionTypes as TodoAsyncActionTypes } from "./todoAsync/actions"

describe("ActionType", () => {
  it("No duplicate def", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const original: string[] = [
      ...Object.values(AuthActionTypes),
      ...Object.values(CounterActionType),
      ...Object.values(GitHubActionTypes),
      ...Object.values(RedditActionTypes),
      ...Object.values(TodoActionTypes),
      ...Object.values(TodoAsyncActionTypes),
      ...Object.values(TttActionTypes),
    ]
    // ## Act ##
    const unique = toUniq(original)
    // ## Assert ##
    expect(unique).toHaveLength(original.length)
  })
})
