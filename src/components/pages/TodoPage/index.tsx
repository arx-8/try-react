import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import { TodoActions } from "components/organisms/TodoActions"
import { TodoInput } from "components/organisms/TodoInput"
import { TodoList } from "components/organisms/TodoList"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import React from "react"
import Typography from "@material-ui/core/Typography"

type Props = {
  children?: never
}

export const TodoPage: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">My TODO</Typography>
      <Paper className={classes.root}>
        <TodoInput />
        <TodoList />
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
