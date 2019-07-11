import { TodoId, VisibilityFilter } from "domain/models/Todo"
import { RootState } from "ducks/store"
import produce from "immer"
import { selectors } from "./selectors"
import { initialState } from "./reducers"

/**
 * テストに必要な最小限の RootState を生成して返す
 */
const createInitialRootState = (): RootState => {
  return {
    todo: initialState,
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
      draft.todo.todoList.push({
        id: "id1" as TodoId,
        label: "id1-label",
        status: "active",
      })
      draft.todo.todoList.push({
        id: "id2" as TodoId,
        label: "id2-label",
        status: "completed",
      })
      draft.todo.visibilityFilter = "all" as VisibilityFilter
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
      draft.todo.todoList.push({
        id: "id1" as TodoId,
        label: "id1-label",
        status: "active",
      })
      draft.todo.todoList.push({
        id: "id2" as TodoId,
        label: "id2-label",
        status: "completed",
      })
      draft.todo.todoList.push({
        id: "id3" as TodoId,
        label: "id3-label",
        status: "completed",
      })
      draft.todo.todoList.push({
        id: "id4" as TodoId,
        label: "id4-label",
        status: "completed",
      })
      draft.todo.visibilityFilter = "completed" as VisibilityFilter
    })
    // ## Act ##
    const result = selectors.filterTodoList(currentState)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
