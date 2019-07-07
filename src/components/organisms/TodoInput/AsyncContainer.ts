import { todoAsyncRequestActions } from "ducks/todoAsync"
import { connect } from "react-redux"
import { AppThunkDispatch } from "types/ReduxTypes"
import { ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps = (): ReduxStateProps => {
  // NOP
  return {}
}

const mapDispatchToProps = (dispatch: AppThunkDispatch): ReduxDispatchProps => {
  return {
    addTodo: (label) =>
      dispatch(
        todoAsyncRequestActions.addTodoRequest({ label, status: "active" })
      ),
  }
}

export const TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoInput)
