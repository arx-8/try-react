/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { RootState } from "src/ducks/store"
import { PlayerName } from "src/ducks/tic-tac-toe/types"

type ReduxStateProps = {
  winnerPlayerName: PlayerName | null
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps

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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  const { winnerPlayerName } = state.ticTacToe
  return {
    winnerPlayerName,
  }
}

export const TTTGameInfo = connect(mapStateToProps)(_TTTGameInfo)
