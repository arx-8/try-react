import { TodoId, VisibilityFilter } from "domain/models/Todo"
import produce from "immer"
import { todoSelectors } from "."
import { initialState } from "./reducers"

describe("filterTodoList", () => {
  it("by initialState", () => {
    // ## Arrange ##
    const currentState = initialState
    // ## Act ##
    const result = todoSelectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("todoList 1件以上, filter:all", () => {
    // ## Arrange ##
    const currentState = produce(initialState, (draft) => {
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
      draft.visibilityFilter = "all" as VisibilityFilter
    })
    // ## Act ##
    const result = todoSelectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("todoList 1件以上, filter:completed", () => {
    // ## Arrange ##
    const currentState = produce(initialState, (draft) => {
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
      draft.todoList.push({
        id: "id3" as TodoId,
        label: "id3-label",
        status: "completed",
      })
      draft.todoList.push({
        id: "id4" as TodoId,
        label: "id4-label",
        status: "completed",
      })
      draft.visibilityFilter = "completed" as VisibilityFilter
    })
    // ## Act ##
    const result = todoSelectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
