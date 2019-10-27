import { connect, MapStateToProps } from "react-redux"
import { RootState } from "src/ducks/store"
import { todoAsyncOperations } from "src/ducks/todoAsync"
import { MapThunkDispatchToPropsFunction } from "src/types/ReduxTypes"
import { OwnProps, ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps: MapStateToProps<
  ReduxStateProps,
  OwnProps,
  RootState
> = () => {
  // NOP
  return {}
}

const mapDispatchToProps: MapThunkDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    addTodo: (label) =>
      dispatch(todoAsyncOperations.addTodoRequest({ label, status: "active" })),
  }
}

export const TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoInput)
