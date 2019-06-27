import { ActionTypes as TodoActionTypes } from "./todo/types"
import { ActionTypes as TodoAsyncActionTypes } from "./todoAsync/actions"
import { CounterActionType } from "./counter/types"
import { toUniq } from "utils/ArrayUtils"

describe("ActionType", () => {
  it("No duplicate def", () => {
    // ## Arrange ##
    const original: string[] = [
      ...Object.values(CounterActionType),
      ...Object.values(TodoActionTypes),
      ...Object.values(TodoAsyncActionTypes),
    ]
    // ## Act ##
    const unique = toUniq(original)
    // ## Assert ##
    expect(unique.length).toEqual(original.length)
  })
})
