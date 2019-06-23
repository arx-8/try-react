import { RootState } from "ducks/store"
import {
  todoAsyncActions,
  TodoAsyncState,
  todoAsyncSelectors,
} from "ducks/todoAsync"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
import { ReduxDispatchProps, ReduxStateProps, _TodoHeader } from "."

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    loading: todoAsyncSelectors.isSomeLoading(state.todoAsync),
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
  return {
    fetchAllTodos: () => dispatch(todoAsyncActions.fetchAllTodos.action()),
  }
}

export const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoHeader)
