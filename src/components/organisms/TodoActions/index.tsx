/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import { RootState } from "ducks/store"
import { todoActions } from "ducks/todo"
import { VisibilityFilter, VisibilityFilterValue } from "ducks/todo/types"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

type ReduxStateProps = {
  currentVisibilityFilter: VisibilityFilter
}

type ReduxDispatchProps = {
  setVisibilityFilter: (visibilityFilter: VisibilityFilter) => void
}

type Props = {
  children?: never
}

export const _TodoActions: React.FC<
  Props & ReduxStateProps & ReduxDispatchProps
> = ({ setVisibilityFilter, currentVisibilityFilter }) => {
  const onChange = (_: any, value: string): void => {
    setVisibilityFilter(value as VisibilityFilter)
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

export const TodoActions: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const setVisibilityFilter = useCallback(
    (visibilityFilter) =>
      dispatch(todoActions.setVisibilityFilter({ visibilityFilter })),
    [dispatch]
  )

  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.todo.visibilityFilter
  )

  const C = _TodoActions
  return (
    <C
      setVisibilityFilter={setVisibilityFilter}
      currentVisibilityFilter={currentVisibilityFilter}
    />
  )
}
