import { todoAsyncRequestActions, TodoAsyncState } from "ducks/todoAsync"
import { connect } from "react-redux"
import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"
import { ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps = (): ReduxStateProps => {
  // NOP
  return {}
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
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
