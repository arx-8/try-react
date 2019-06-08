/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { SemanticCOLORS, Label } from "semantic-ui-react"
import { RootState } from "ducks/store"
import { connect } from "react-redux"
import { counterSelectors } from "ducks/counter"

const range = (end: number): number[] => {
  return 0 < end ? [...Array(end).keys()] : []
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

type ReduxStateProps = {
  beadsCount: number
}

type Props = {
  children?: never
} & ReduxStateProps

const _ColorfulBeads: React.FC<Props> = ({ beadsCount }) => {
  return (
    <div css={root}>
      {range(beadsCount).map((i) => (
        <Label key={i} circular color={COLORS[i % COLORS.length]} />
      ))}
    </div>
  )
}

const root = css`
  margin-top: 40px;
`

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    beadsCount: counterSelectors.get10PerCount(state.counter),
  }
}

export const ColorfulBeads = connect(mapStateToProps)(_ColorfulBeads)
