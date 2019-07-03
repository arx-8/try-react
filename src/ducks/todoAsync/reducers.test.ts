import { initialState, reducer } from "./reducers"
import { actions } from "./actions"
import { TodoId } from "domain/models/Todo"
import produce from "immer"

describe("updateTodo", () => {
  it("updateTodo", async () => {
    // ## Arrange ##
    const prevState = produce(initialState, (draft) => {
      draft.todoList = [
        {
          id: "id0" as TodoId,
          label: "old label 0",
          status: "active",
        },
        {
          id: "id1" as TodoId,
          label: "old label 1",
          status: "active",
        },
      ]
    })

    // ## Act ##
    const result = reducer(
      prevState,
      actions.updateTodo.started({
        id: "id1" as TodoId,
        label: "NEW LABEL 1",
        status: "completed",
      })
    )

    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
