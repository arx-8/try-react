import { ActionTypes as TodoActionTypes } from "./todo/types"
import { ActionTypes as TodoAsyncActionTypes } from "./todoAsync/actions"
import { ActionTypes as RedditActionTypes } from "./reddit/actions"
import { CounterActionType } from "./counter/types"
import { toUniq } from "utils/ArrayUtils"

describe("ActionType", () => {
  it("No duplicate def", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const original: string[] = [
      ...Object.values(CounterActionType),
      ...Object.values(TodoActionTypes),
      ...Object.values(TodoAsyncActionTypes),
      ...Object.values(RedditActionTypes),
    ]
    // ## Act ##
    const unique = toUniq(original)
    // ## Assert ##
    expect(unique).toHaveLength(original.length)
  })
})
