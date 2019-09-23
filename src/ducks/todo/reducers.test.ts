import { TodoId } from "domain/models/Todo"
import produce from "immer"
import { todoReducer } from "."
import { initialState } from "./reducers"
import { ActionTypes } from "./types"

describe("ADD_TODO", () => {
  it("prev = initialState", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const prevState = initialState

    // ## Act ##
    const result = todoReducer(prevState, {
      type: ActionTypes.ADD_TODO,
      payload: {
        label: "new task name",
      },
    })

    // ## Assert ##
    expect(result.todoList).toHaveLength(1)
    expect(result.todoList[0].id).not.toBeNull()

    // ランダムな ulid のテストが面倒なため置き換える
    const skinnyResult = produce(result, (draft) => {
      draft.todoList.forEach((t) => {
        t.id = `id.length:${t.id.length}` as TodoId
      })
    })
    expect(skinnyResult).toMatchSnapshot()
  })

  it("prev = todoList 1件以上", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const prevState = produce(initialState, (draft) => {
      draft.todoList.push({
        id: "id1" as TodoId,
        label: "id1-label",
        status: "active",
      })
      draft.todoList.push({
        id: "id2" as TodoId,
        label: "id2-label",
        status: "completed",
      })
    })

    // ## Act ##
    const result = todoReducer(prevState, {
      type: ActionTypes.ADD_TODO,
      payload: {
        label: "new task name",
      },
    })

    // ## Assert ##
    expect(result.todoList).toHaveLength(3)
    expect(result.todoList[2].id).not.toBeNull()

    // ランダムな ulid のテストが面倒なため置き換える
    const skinnyResult = produce(result, (draft) => {
      draft.todoList.forEach((t) => {
        t.id = `id.length:${t.id.length}` as TodoId
      })
    })
    expect(skinnyResult).toMatchSnapshot()
  })
})
