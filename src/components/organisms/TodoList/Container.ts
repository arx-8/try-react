import { RootState } from "ducks/store"
import { todoActions, todoSelectors } from "ducks/todo"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { OwnProps, ReduxDispatchProps, ReduxStateProps, _TodoList } from "."

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    todoList: todoSelectors.filterTodoList(state.todo),
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
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
