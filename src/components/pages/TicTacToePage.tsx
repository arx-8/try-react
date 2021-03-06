/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React from "react"
import Helmet from "react-helmet"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { TTTBoard } from "src/components/organisms/TTTBoard"
import { TTTGameInfo } from "src/components/organisms/TTTGameInfo"
import { RootState } from "src/ducks/store"
import { tttOperations } from "src/ducks/tic-tac-toe"

type ReduxStateProps = {}

type ReduxDispatchProps = {
  reset: () => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _TicTacToePage: React.FC<Props> = ({ reset }) => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Helmet>
        <title>TicTacToe App</title>
      </Helmet>

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
    </React.Fragment>
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

const mapStateToProps: MapStateToProps<
  ReduxStateProps,
  OwnProps,
  RootState
> = () => {
  // NOP
  return {}
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    reset: () => dispatch(tttOperations.reset()),
  }
}

export const TicTacToePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TicTacToePage)
