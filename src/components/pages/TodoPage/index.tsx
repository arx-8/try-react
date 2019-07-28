import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { TodoActions } from "components/organisms/TodoActions/Container"
import { TodoInput } from "components/organisms/TodoInput/Container"
import { TodoList } from "components/organisms/TodoList/Container"
import React from "react"
import Helmet from "react-helmet"

type Props = {
  children?: never
}

export const TodoPage: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Helmet>
        <title>Todo App</title>
      </Helmet>

      <Container maxWidth="sm">
        <Typography variant="h2">My TODO</Typography>
        <Paper className={classes.root}>
          <TodoInput />
          <TodoList />
          <TodoActions />
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
