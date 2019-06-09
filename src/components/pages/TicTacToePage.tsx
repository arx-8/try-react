/** @jsx jsx */
import { connect } from "react-redux"
import { css, jsx } from "@emotion/core"
import { Dispatch } from "redux"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import { tttActions } from "ducks/tic-tac-toe"
import { TTTBoard } from "components/organisms/TTTBoard"
import { TTTGameInfo } from "components/organisms/TTTGameInfo"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import React from "react"

type ReduxStateProps = {}

type ReduxDispatchProps = {
  reset: () => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const _TicTacToePage: React.FC<Props> = ({ reset }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <div css={root}>
          <TTTBoard />
          <TTTGameInfo />
        </div>
        <div css={actions}>
          <button onClick={reset}>Reset</button>
        </div>
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(3, 2),
    },
  })
)

const root = css`
  display: flex;
  flex-direction: row;
`

const actions = css`
  margin-top: 8px;
`

const mapStateToProps = (): ReduxStateProps => {
  // NOP
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    reset: () => dispatch(tttActions.reset()),
  }
}

export const TicTacToePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicTacToePage)
