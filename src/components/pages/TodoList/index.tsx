import { Todo } from "components/organisms/Todo"
import { TodoActions } from "components/organisms/TodoActions"
import { TodoInput } from "components/organisms/TodoInput"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"

type Props = {
  children?: never
}

const dummyTodoList = ["todo1", "todo2", "todo3"]

export const TodoList: React.FC<Props> = () => {
  const classes = useStyles()

  return (
    <Container maxWidth="sm">
      <Typography variant="h2">TODO</Typography>
      <Paper className={classes.root}>
        <TodoInput />
        {dummyTodoList.map((t) => (
          <Todo key={t} />
        ))}
        <TodoActions />
      </Paper>
    </Container>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 2),
    },
  })
)
