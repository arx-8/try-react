/** @jsx jsx */
import { connect } from "react-redux"
import { css, jsx } from "@emotion/core"
import { RootState } from "ducks/store"
import React from "react"
import { PlayerName } from "ducks/tic-tac-toe/types"

type ReduxStateProps = {
  winnerPlayerName: PlayerName | null
}

type ReduxDispatchProps = {}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const _TTTGameInfo: React.FC<Props> = ({ winnerPlayerName }) => {
  return (
    <div css={root}>
      {winnerPlayerName && (
        <div css={winner}>Winner is {winnerPlayerName} !!</div>
      )}
    </div>
  )
}

const root = css`
  margin-left: 20px;
`

const winner = css`
  color: red;
  font-size: larger;
`

const mapStateToProps = (state: RootState): ReduxStateProps => {
  const { winnerPlayerName } = state.ticTacToe
  return {
    winnerPlayerName,
  }
}

export const TTTGameInfo = connect(mapStateToProps)(_TTTGameInfo)
