import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import Checkbox from "@material-ui/core/Checkbox"
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import React from "react"
import Typography from "@material-ui/core/Typography"

type Props = {
  children?: never
}

export const TodoList: React.FC<Props> = () => {
  const classes = useStyles()
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value: number): void => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }

  return (
    <List className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`

        return (
          <ListItem
            key={value}
            dense
            button
            onClick={() => handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>

            <Typography>Line item あいうえお {value + 1}</Typography>

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                className={classes.button}
                aria-label="Delete"
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
