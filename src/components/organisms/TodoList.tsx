/** @jsx jsx */
import { connect } from "react-redux"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { css, jsx } from "@emotion/core"
import { Dispatch } from "redux"
import { RootState } from "ducks/store"
import { Todo, TodoId, TodoStatus } from "ducks/todo/types"
import { todoSelectors, todoActions } from "ducks/todo"
import Checkbox from "@material-ui/core/Checkbox"
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import React from "react"
import Typography from "@material-ui/core/Typography"

type ReduxStateProps = {
  todoList: Todo[]
}

type ReduxDispatchProps = {
  changeTodoStatus: (todoId: TodoId, todoStatus: TodoStatus) => void
  deleteTodo: (todoId: TodoId) => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const _TodoList: React.FC<Props> = ({
  changeTodoStatus,
  deleteTodo,
  todoList,
}) => {
  const classes = useStyles()

  const onToggleStatus = (todoId: TodoId): void => {
    const status = todoList.find((t) => t.id === todoId)!.status
    const toggled: TodoStatus = status === "active" ? "completed" : "active"
    changeTodoStatus(todoId, toggled)
  }

  return (
    <List className={classes.root}>
      {todoList.map((t) => {
        return (
          <ListItem
            key={t.id}
            button
            dense
            onClick={() => onToggleStatus(t.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={t.status === "completed"}
                tabIndex={-1}
                disableRipple
                inputProps={{
                  "aria-labelledby": `checkbox-list-label-${t.id}`,
                }}
              />
            </ListItemIcon>

            <div css={t.status === "completed" && completed}>
              <Typography>{t.label}</Typography>
            </div>

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                className={classes.button}
                aria-label="Delete"
                onClick={() => deleteTodo(t.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      margin: theme.spacing(1),
    },
  })
)

const completed = css`
  opacity: 0.3;
  text-decoration: line-through;
`

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    todoList: todoSelectors.filterTodoList(state.todo),
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    changeTodoStatus: (todoId, todoStatus) =>
      dispatch(todoActions.changeTodoStatus({ todoId, todoStatus })),
    deleteTodo: (todoId) => dispatch(todoActions.deleteTodo({ todoId })),
  }
}

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoList)
