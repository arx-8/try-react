import { TodoId, VisibilityFilter } from "domain/models/Todo"
import { RootState } from "ducks/store"
import produce from "immer"
import { initialState } from "./reducers"
import { selectors } from "./selectors"

/**
 * テストに必要な最小限の RootState を生成して返す
 */
const createInitialRootState = (): RootState => {
  return {
    todoAsync: initialState,
  } as any
}

describe("filterTodoList", () => {
  it("by initialState", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const currentState = createInitialRootState()
    // ## Act ##
    const result = selectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("todoList 1件以上, filter:all", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const currentState = produce(createInitialRootState(), (draft) => {
      draft.todoAsync.todoList.push({
        id: "id1" as TodoId,
        label: "id1-label",
        status: "active",
      })
      draft.todoAsync.todoList.push({
        id: "id2" as TodoId,
        label: "id2-label",
        status: "completed",
      })
      draft.todoAsync.visibilityFilter = "all" as VisibilityFilter
    })
    // ## Act ##
    const result = selectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })

  it("todoList 1件以上, filter:completed", () => {
    expect.hasAssertions()
    // ## Arrange ##
    const currentState = produce(createInitialRootState(), (draft) => {
      draft.todoAsync.todoList.push({
        id: "id1" as TodoId,
        label: "id1-label",
        status: "active",
      })
      draft.todoAsync.todoList.push({
        id: "id2" as TodoId,
        label: "id2-label",
        status: "completed",
      })
      draft.todoAsync.todoList.push({
        id: "id3" as TodoId,
        label: "id3-label",
        status: "completed",
      })
      draft.todoAsync.todoList.push({
        id: "id4" as TodoId,
        label: "id4-label",
        status: "completed",
      })
      draft.todoAsync.visibilityFilter = "completed" as VisibilityFilter
    })
    // ## Act ##
    const result = selectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
