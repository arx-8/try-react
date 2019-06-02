/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { SemanticCOLORS, Label } from "semantic-ui-react"

type Props = {
  children?: never
  count: number
}

const range = (end: number): number[] => {
  return [...Array(end).keys()]
}

const COLORS: readonly SemanticCOLORS[] = [
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "violet",
  "purple",
  "pink",
  "brown",
  "grey",
  "black",
]

export const ColorfulBeads: React.FC<Props> = ({ count }) => {
  return (
    <div css={root}>
      {range(count).map((i) => (
        <Label key={i} circular color={COLORS[i % COLORS.length]} />
      ))}
    </div>
  )
}

const root = css`
  margin-top: 40px;
`
