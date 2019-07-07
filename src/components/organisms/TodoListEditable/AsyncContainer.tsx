import { CallPutTodoReq } from "data/repository/TodoRepository"
import { Todo, TodoId } from "domain/models/Todo"
import { RootState } from "ducks/store"
import {
  todoAsyncActions,
  todoAsyncRequestActions,
  todoAsyncSelectors,
} from "ducks/todoAsync"
import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { MapThunkDispatchToPropsFunction } from "types/ReduxTypes"
import { equals, sort } from "utils/ArrayUtils"
import { OwnProps, _TodoListEditable as Presentational } from "."

export type ReduxStateProps = {
  todoList: Todo[]
}

export type ReduxDispatchProps = {
  deleteTodo: (todoId: TodoId) => Promise<void>
  setEditTargetId: (todoId?: TodoId) => void
  updateTodo: (params: CallPutTodoReq) => Promise<void>
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

class Container extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props) => {
    const prevTodoList = sort(this.props.todoList, sortCompareTodoId)
    const nextTodoList = sort(nextProps.todoList, sortCompareTodoId)
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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    todoList: todoAsyncSelectors.filterTodoList(state.todoAsync),
  }
}

const mapDispatchToProps: MapThunkDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    deleteTodo: (id) =>
      dispatch(todoAsyncRequestActions.deleteTodoRequest({ id })),
    setEditTargetId: (editTargetId) =>
      dispatch(todoAsyncActions.setEditTargetId({ editTargetId })),
    updateTodo: (params) =>
      dispatch(todoAsyncRequestActions.updateTodoRequest(params)),
  }
}

export const TodoListEditable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
