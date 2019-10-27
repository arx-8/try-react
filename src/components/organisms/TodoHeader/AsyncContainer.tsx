import React, { useEffect } from "react"
import { connect, MapStateToProps } from "react-redux"
import { RootState } from "src/ducks/store"
import { todoAsyncOperations, todoAsyncSelectors } from "src/ducks/todoAsync"
import { MapThunkDispatchToPropsFunction } from "src/types/ReduxTypes"
import {
  ReduxDispatchProps,
  ReduxStateProps,
  _TodoHeader as Presentational,
} from "."

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const Container: React.FC<Props> = (props) => {
  const { fetchAllTodos } = props

  useEffect(() => {
    fetchAllTodos()
  }, [fetchAllTodos])

  return <Presentational {...props} />
}

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    errorMessage: state.todoAsync.errorMessage,
    loading: todoAsyncSelectors.isSomeLoading(state.todoAsync),
  }
}

const mapDispatchToProps: MapThunkDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    fetchAllTodos: () =>
      dispatch(todoAsyncOperations.fetchAllTodosRequestDebounce()),
  }
}

export const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
