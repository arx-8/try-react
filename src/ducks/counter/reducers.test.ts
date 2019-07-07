import { CounterActionType } from "./types"
import { counterReducer } from "."
import { initialState } from "./reducers"
import produce from "immer"

describe("CHANGE_DEFAULT_AMOUNT", () => {
  it("prev = initialState", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const prevState = initialState
    // ## Act ##
    const result = counterReducer(prevState, {
      type: CounterActionType.CHANGE_DEFAULT_AMOUNT,
      payload: {
        defaultAmount: 10,
      },
    })
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("prev = edited", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const prevState = produce(initialState, (draft) => {
      draft.count = 10
      draft.defaultAmount = 10
    })

    // ## Act ##
    const result = counterReducer(prevState, {
      type: CounterActionType.CHANGE_DEFAULT_AMOUNT,
      payload: {
        defaultAmount: 1000,
      },
    })
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
