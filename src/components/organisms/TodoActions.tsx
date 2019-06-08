/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import React from "react"

type Props = {
  children?: never
}

export const TodoActions: React.FC<Props> = () => {
  const [value, setValue] = React.useState("all")

  const onChange = (_: any, value: string): void => {
    setValue(value)
  }

  return (
    <div css={root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Actions</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          onChange={onChange}
          row
          value={value}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="All"
            labelPlacement="end"
            value="all"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Active"
            labelPlacement="end"
            value="active"
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Completed"
            labelPlacement="end"
            value="completed"
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

const root = css`
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
`
