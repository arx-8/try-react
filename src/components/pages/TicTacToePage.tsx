/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import { TTTBoard } from "components/organisms/TTTBoard"
import { TTTGameInfo } from "components/organisms/TTTGameInfo"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import React from "react"

type Props = {
  children?: never
}

export const TicTacToePage: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <div css={root}>
          <TTTBoard />
          <TTTGameInfo />
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
