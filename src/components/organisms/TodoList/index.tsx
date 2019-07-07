/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import Checkbox from "@material-ui/core/Checkbox"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import DeleteIcon from "@material-ui/icons/Delete"
import { Todo, TodoId, TodoStatus } from "domain/models/Todo"
import React from "react"

export type ReduxStateProps = {
  todoList: Todo[]
}

export type ReduxDispatchProps = {
  changeTodoStatus: (todoId: TodoId, todoStatus: TodoStatus) => void
  deleteTodo: (todoId: TodoId) => void
}

export type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

export const _TodoList: React.FC<Props> = ({
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
