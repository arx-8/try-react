/** @jsx jsx */
import { connect } from "react-redux"
import { css, jsx } from "@emotion/core"
import { Dispatch } from "redux"
import { InputValue, PlayerName } from "ducks/tic-tac-toe/types"
import { RootState } from "ducks/store"
import { tttActions } from "ducks/tic-tac-toe"
import { TTTSquare } from "./TTTSquare"
import React from "react"

type ReduxStateProps = {
  currentPlayerName: PlayerName
  inputValues: InputValue[]
  isContinue: boolean
}

type ReduxDispatchProps = {
  clickSquare: (index: number, value: InputValue) => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const _TTTBoard: React.FC<Props> = ({
  clickSquare,
  currentPlayerName,
  inputValues,
  isContinue,
}) => {
  return (
    <div>
      <div css={nextPlayer}>Next player: {currentPlayerName}</div>
      <div css={container}>
        {inputValues.map((v, index) => (
          <TTTSquare
            // 他にキーがない、固定枠のためパフォーマンス劣化もないため
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            value={v}
            onClick={() => clickSquare(index, currentPlayerName)}
            disabled={!isContinue || v !== null}
          />
        ))}
      </div>
    </div>
  )
}

const nextPlayer = css`
  margin-bottom: 10px;
`

const container = css`
  display: grid;
  grid-template-columns: 40px 40px 40px;
  grid-template-rows: 40px 40px 40px;
`

const mapStateToProps = (state: RootState): ReduxStateProps => {
  const { currentPlayerName, inputValues, isContinue } = state.ticTacToe
  return {
    currentPlayerName,
    inputValues,
    isContinue,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    clickSquare: (index, value) =>
      dispatch(tttActions.clickSquare({ index, value })),
  }
}

export const TTTBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TTTBoard)
