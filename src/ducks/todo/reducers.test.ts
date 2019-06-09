import { ActionTypes, TodoId } from "./types"
import { initialState } from "./reducers"
import { todoReducer } from "."
import produce from "immer"

describe("ADD_TODO", () => {
  it("prev = initialState", () => {
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
    expect(result.todoList.length).toStrictEqual(1)
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
    expect(result.todoList.length).toStrictEqual(3)
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