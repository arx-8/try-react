/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import React, { useCallback } from "react"
import { VisibilityFilter, VisibilityFilterValue } from "src/domain/models/Todo"
import { AllowedAny } from "src/types/Utils"

type ReduxStateProps = {
  currentVisibilityFilter: VisibilityFilter
}

type ReduxDispatchProps = {
  setVisibilityFilter: (visibilityFilter: VisibilityFilter) => void
}

export type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

export const _TodoActions: React.FC<Props> = ({
  setVisibilityFilter,
  currentVisibilityFilter,
}) => {
  const onChange = useCallback(
    (_: AllowedAny, value: string): void => {
      setVisibilityFilter(value as VisibilityFilter)
    },
    [setVisibilityFilter]
  )

  return (
    <div css={root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Actions</FormLabel>
        <RadioGroup
          aria-label="position"
          name="position"
          onChange={onChange}
          row
          value={currentVisibilityFilter}
        >
          <FormControlLabel
            control={<Radio color="primary" />}
            label="All"
            labelPlacement="end"
            value={VisibilityFilterValue.all}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Active"
            labelPlacement="end"
            value={VisibilityFilterValue.active}
          />
          <FormControlLabel
            control={<Radio color="primary" />}
            label="Completed"
            labelPlacement="end"
            value={VisibilityFilterValue.completed}
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
