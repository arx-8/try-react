/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { Label, SemanticCOLORS } from "semantic-ui-react"
import { counterSelectors } from "src/ducks/counter"
import { RootState } from "src/ducks/store"
import { range } from "src/utils/ArrayUtils"

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

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps

export const _ColorfulBeads: React.FC<Props> = ({ beadsCount }) => {
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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    beadsCount: counterSelectors.get10PerCount(state.counter),
  }
}

export const ColorfulBeads = connect(mapStateToProps)(_ColorfulBeads)
