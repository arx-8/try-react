import { RootState } from "ducks/store"
import { todoActions, todoSelectors } from "ducks/todo"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import { ReduxDispatchProps, ReduxStateProps, _TodoList } from "."

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    todoList: todoSelectors.filterTodoList(state.todo),
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    changeTodoStatus: (todoId, todoStatus) =>
      dispatch(todoActions.changeTodoStatus({ todoId, todoStatus })),
    deleteTodo: (todoId) => dispatch(todoActions.deleteTodo({ todoId })),
  }
}

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoList)
