import { todoAsyncRequestActions } from "ducks/todoAsync"
import { TodoAsyncDispatch } from "ducks/todoAsync/types"
import { connect } from "react-redux"
import { ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps = (): ReduxStateProps => {
  // NOP
  return {}
}

const mapDispatchToProps = (
  dispatch: TodoAsyncDispatch
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
