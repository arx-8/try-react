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
import { TodoId, TodoStatus } from "domain/models/Todo"
import React, { Fragment } from "react"
import { TodoEditDialog } from "../TodoEditDialog"
import { ReduxDispatchProps, ReduxStateProps } from "./AsyncContainer"

export type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

export const _TodoListEditable: React.FC<Props> = ({
  closeTodoEditDialog,
  deleteTodo,
  isOpenTodoEditDialog,
  openTodoEditDialog,
  todoList,
  updateTodo,
}) => {
  const classes = useStyles()

  const onToggleStatus = (todoId: TodoId): void => {
    const status = todoList.find((t) => t.id === todoId)!.status
    const toggled: TodoStatus = status === "active" ? "completed" : "active"
    updateTodo({ id: todoId, status: toggled })
  }

  return (
    <Fragment>
      <List className={classes.root}>
        {todoList.map((t) => (
          <ListItem
            key={t.id}
            button
            dense
            onClick={() => openTodoEditDialog(t.id)}
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
                onClick={(e) => {
                  // edit dialog が開くのを阻止するため
                  e.stopPropagation()
                  onToggleStatus(t.id)
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
        ))}
      </List>

      <TodoEditDialog
        open={isOpenTodoEditDialog}
        onClose={closeTodoEditDialog}
        onSubmit={(editTargetId, values) => {
          updateTodo({
            id: editTargetId,
            label: values.label,
            status: values.status,
          })
          closeTodoEditDialog()
        }}
      />
    </Fragment>
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
