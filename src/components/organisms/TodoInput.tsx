/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import React from "react"
import TextField from "@material-ui/core/TextField"

type Props = {
  children?: never
}

export const TodoInput: React.FC<Props> = () => {
  const [value, setValue] = React.useState("")
  const classes = useStyles()

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }
  const onSubmit = (): void => {
    // TODO
    console.log(value)
  }

  return (
    <form css={root} noValidate autoComplete="off" onSubmit={onSubmit}>
      <TextField
        className={classes.textField}
        fullWidth
        label="Task name"
        margin="normal"
        onChange={onChange}
        placeholder="Input task name"
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
