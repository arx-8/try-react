import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Helmet from "react-helmet"
import { TodoActions } from "src/components/organisms/TodoActions/AsyncContainer"
import { TodoEditDialog } from "src/components/organisms/TodoEditDialog"
import { TodoHeader } from "src/components/organisms/TodoHeader/AsyncContainer"
import { TodoInput } from "src/components/organisms/TodoInput/AsyncContainer"
import { TodoListEditable } from "src/components/organisms/TodoListEditable/AsyncContainer"

type Props = {
  children?: never
}

export const TodoAsyncPage: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Helmet>
        <title>Todo App Async</title>
      </Helmet>

      <Container maxWidth="sm">
        <Typography variant="h2">My TODO (Async)</Typography>
        <Paper className={classes.root}>
          <TodoHeader />
          <TodoInput />
          <TodoListEditable />
          <TodoActions />
          <TodoEditDialog />
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
