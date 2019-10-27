import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { RootState } from "src/ducks/store"
import { todoOperations } from "src/ducks/todo"
import { OwnProps, ReduxDispatchProps, ReduxStateProps, _TodoInput } from "."

const mapStateToProps: MapStateToProps<
  ReduxStateProps,
  OwnProps,
  RootState
> = () => {
  // NOP
  return {}
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    addTodo: (label: string) => dispatch(todoOperations.addTodo({ label })),
  }
}

export const TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoInput)
