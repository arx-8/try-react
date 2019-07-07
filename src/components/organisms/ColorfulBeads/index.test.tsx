import { _ColorfulBeads as SutComponent } from "."
import { create } from "react-test-renderer"
import React from "react"

describe("ColorfulBeads", () => {
  it("3 Beads", () => {
    expect.hasAssertions()
    // ## Arrange ##
    // ## Act ##
    const result = create(<SutComponent beadsCount={3} />)
    // ## Assert ##
    expect(result).toMatchSnapshot()
  })
})
