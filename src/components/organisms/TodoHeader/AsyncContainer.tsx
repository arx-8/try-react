import { RootState } from "ducks/store"
import {
  todoAsyncRequestActions,
  todoAsyncSelectors,
  TodoAsyncState,
} from "ducks/todoAsync"
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
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

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
  return {
    fetchAllTodos: () =>
      dispatch(todoAsyncRequestActions.fetchAllTodosRequest()),
  }
}

export const TodoHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
