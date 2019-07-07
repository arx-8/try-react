import { RootState } from "ducks/store"
import { todoAsyncRequestActions, todoAsyncSelectors } from "ducks/todoAsync"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { AppThunkDispatch } from "types/ReduxTypes"
import {
  ReduxDispatchProps,
  ReduxStateProps,
  _TodoHeader as Presentational,
} from "."

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const Container: React.FC<Props> = (props) => {
  const { fetchAllTodos } = props

  useEffect(() => {
    fetchAllTodos()
  }, [fetchAllTodos])

  return <Presentational {...props} />
}

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    errorMessage: state.todoAsync.errorMessage,
    loading: todoAsyncSelectors.isSomeLoading(state.todoAsync),
  }
}

const mapDispatchToProps = (dispatch: AppThunkDispatch): ReduxDispatchProps => {
  return {
    fetchAllTodos: () =>
      dispatch(todoAsyncRequestActions.fetchAllTodosRequestDebounce()),
  }
}

export const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
