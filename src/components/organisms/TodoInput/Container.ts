import { todoActions } from "ducks/todo"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps = (): ReduxStateProps => {
  // NOP
  return {}
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    addTodo: (label: string) => dispatch(todoActions.addTodo({ label })),
  }
}

export const TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoInput)
