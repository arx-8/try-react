import { RootState } from "ducks/store"
import { todoAsyncOperations } from "ducks/todoAsync"
import { connect, MapStateToProps } from "react-redux"
import { MapThunkDispatchToPropsFunction } from "types/ReduxTypes"
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
