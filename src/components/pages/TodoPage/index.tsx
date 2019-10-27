import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Helmet from "react-helmet"
import { TodoActions } from "src/components/organisms/TodoActions/Container"
import { TodoInput } from "src/components/organisms/TodoInput/Container"
import { TodoList } from "src/components/organisms/TodoList/Container"

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
