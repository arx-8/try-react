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
import React from "react"
import { connect } from "react-redux"
import { Dispatch } from "redux"

type ReduxStateProps = {
  currentVisibilityFilter: VisibilityFilter
}

type ReduxDispatchProps = {
  setVisibilityFilter: (visibilityFilter: VisibilityFilter) => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

export const _TodoActions: React.FC<Props> = ({
  setVisibilityFilter,
  currentVisibilityFilter,
}) => {
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

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    currentVisibilityFilter: state.todo.visibilityFilter,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    setVisibilityFilter: (visibilityFilter) =>
      dispatch(todoActions.setVisibilityFilter({ visibilityFilter })),
  }
}

export const TodoActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoActions)
