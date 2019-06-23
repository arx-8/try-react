import { RootState } from "ducks/store"
import {
  todoAsyncRequestActions,
  todoAsyncSelectors,
  TodoAsyncState,
} from "ducks/todoAsync"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
import { ReduxDispatchProps, ReduxStateProps, _TodoHeader } from "."

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    errorMessage: state.todoAsync.errorMessage,
    loading: todoAsyncSelectors.isSomeLoading(state.todoAsync),
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
  return {
    fetchAllTodos: () =>
      dispatch(todoAsyncRequestActions.fetchAllTodosRequest()),
  }
}

export const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoHeader)
