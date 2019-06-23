import { Todo } from "domain/models/Todo"
import { RootState } from "ducks/store"
import {
  todoAsyncRequestActions,
  todoAsyncSelectors,
  TodoAsyncState,
} from "ducks/todoAsync"
import React from "react"
import { connect } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { AnyAction } from "typescript-fsa"
import { equals } from "utils/ArrayUtils"
import {
  ReduxDispatchProps,
  ReduxStateProps,
  _TodoList as Presentational,
} from "."

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

class Container extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => {
    const prevTodoList = this.props.todoList.slice().sort(sortCompareTodoId)
    const nextTodoList = nextProps.todoList.slice().sort(sortCompareTodoId)
    return !equals(prevTodoList, nextTodoList, predicateEqualsTodo)
  }

  render(): React.ReactNode {
    return <Presentational {...this.props} />
  }
}

const predicateEqualsTodo = (e1: Todo, e2: Todo): boolean => {
  if (e1.id !== e2.id) return false
  if (e1.label !== e2.label) return false
  if (e1.status !== e2.status) return false
  return true
}

const sortCompareTodoId = (prev: Todo, next: Todo): number => {
  if (prev.id < next.id) return -1
  if (prev.id > next.id) return 1
  return 0
}

const mapStateToProps = (state: RootState): ReduxStateProps => {
  return {
    todoList: todoAsyncSelectors.filterTodoList(state.todoAsync),
  }
}

const mapDispatchToProps = (
  dispatch: ThunkDispatch<TodoAsyncState, undefined, AnyAction>
): ReduxDispatchProps => {
  return {
    changeTodoStatus: (id, status) =>
      dispatch(todoAsyncRequestActions.changeTodoStatusRequest({ id, status })),
    deleteTodo: (id) =>
      dispatch(todoAsyncRequestActions.deleteTodoRequest({ id })),
  }
}

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
