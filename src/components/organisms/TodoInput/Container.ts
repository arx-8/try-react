import { RootState } from "ducks/store"
import { todoOperations } from "ducks/todo"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
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
