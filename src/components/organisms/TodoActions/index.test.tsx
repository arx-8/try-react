import { _TodoActions as SutComponent } from "."
import { create } from "react-test-renderer"
import React from "react"

describe("Snapshot", () => {
  it("all", () => {
    // ## Arrange ##
    // ## Act ##
    const result = create(
      <SutComponent
        setVisibilityFilter={() => {}}
        currentVisibilityFilter="all"
      />
    )
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
