/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { RootState } from "src/ducks/store"
import { tttOperations } from "src/ducks/tic-tac-toe"
import { InputValue, PlayerName } from "src/ducks/tic-tac-toe/types"
import { TTTSquare } from "./TTTSquare"

type ReduxStateProps = {
  currentPlayerName: PlayerName
  inputValues: InputValue[]
  isContinue: boolean
}

type ReduxDispatchProps = {
  clickSquare: (index: number, value: InputValue) => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  const { currentPlayerName, inputValues, isContinue } = state.ticTacToe
  return {
    currentPlayerName,
    inputValues,
    isContinue,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    clickSquare: (index, value) =>
      dispatch(tttOperations.clickSquare({ index, value })),
  }
}

export const TTTBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TTTBoard)
