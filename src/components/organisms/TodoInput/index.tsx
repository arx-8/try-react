/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import React, { FormEventHandler } from "react"

export type ReduxStateProps = {}

export type ReduxDispatchProps = {
  addTodo: (label: string) => void
}

export type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

export const _TodoInput: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = React.useState("")
  const classes = useStyles()

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    if (0 < value.length) {
      addTodo(value)
      // init input
      setValue("")
    }
  }

  return (
    <form css={root} noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        className={classes.textField}
        fullWidth
        label="Todo name"
        margin="normal"
        onChange={onChange}
        placeholder="Input todo name"
        value={value}
        variant="outlined"
      />
    </form>
  )
}

const root = css`
  display: flex;
  flex-wrap: wrap;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
)
