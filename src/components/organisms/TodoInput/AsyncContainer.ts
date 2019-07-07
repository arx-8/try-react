import { RootState } from "ducks/store"
import { todoAsyncRequestActions } from "ducks/todoAsync"
import { connect, MapStateToProps } from "react-redux"
import { AppThunkDispatch, MapDispatchToPropsFunction } from "types/ReduxTypes"
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
  AppThunkDispatch,
  OwnProps,
  ReduxDispatchProps
> = (dispatch) => {
  return {
    addTodo: (label) =>
      dispatch(
        todoAsyncRequestActions.addTodoRequest({ label, status: "active" })
      ),
  }
}

export const TodoInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(_TodoInput)
