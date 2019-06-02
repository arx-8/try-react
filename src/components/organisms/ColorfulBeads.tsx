/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { SemanticCOLORS, Label } from "semantic-ui-react"
import { RootState } from "ducks/store"
import { connect } from "react-redux"

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
  count: number
}

type Props = {
  children?: never
} & ReduxStateProps

const _ColorfulBeads: React.FC<Props> = ({ count }) => {
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

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    count: state.counterReducer.count,
  }
}

export const ColorfulBeads = connect(mapStateToProps)(_ColorfulBeads)
