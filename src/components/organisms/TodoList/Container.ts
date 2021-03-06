import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { RootState } from "src/ducks/store"
import { todoOperations, todoSelectors } from "src/ducks/todo"
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
      dispatch(todoOperations.changeTodoStatus({ todoId, todoStatus })),
    deleteTodo: (todoId) => dispatch(todoOperations.deleteTodo({ todoId })),
  }
}

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoList)
