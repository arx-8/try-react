import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { TodoActions } from "components/organisms/TodoActions/AsyncContainer"
import { TodoHeader } from "components/organisms/TodoHeader/AsyncContainer"
import { TodoInput } from "components/organisms/TodoInput/AsyncContainer"
import { TodoListEditable } from "components/organisms/TodoListEditable/AsyncContainer"
import React from "react"

type Props = {
  children?: never
}

export const TodoAsyncPage: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">My TODO (Async)</Typography>
      <Paper className={classes.root}>
        <TodoHeader />
        <TodoInput />
        <TodoListEditable />
        <TodoActions />
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
