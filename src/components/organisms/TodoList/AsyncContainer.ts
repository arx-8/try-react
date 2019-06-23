import { RootState } from "ducks/store"
import {
  todoAsyncActions,
  todoAsyncSelectors,
  TodoAsyncState,
} from "ducks/todoAsync"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
import { ReduxDispatchProps, ReduxStateProps, _TodoList } from "."

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    todoList: todoAsyncSelectors.filterTodoList(state.todoAsync),
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
  return {
    changeTodoStatus: (id, status) =>
      dispatch(todoAsyncActions.changeTodoStatus.action({ id, status })),
    deleteTodo: (id) => dispatch(todoAsyncActions.deleteTodo.action({ id })),
  }
}

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoList)
