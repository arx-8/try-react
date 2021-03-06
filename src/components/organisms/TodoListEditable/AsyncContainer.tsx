import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { CallPutTodoReq } from "src/data/apis/TodoAPIClient"
import { Todo, TodoId } from "src/domain/models/Todo"
import { RootState } from "src/ducks/store"
import { todoAsyncOperations, todoAsyncSelectors } from "src/ducks/todoAsync"
import { MapThunkDispatchToPropsFunction } from "src/types/ReduxTypes"
import { equals, sort } from "src/utils/ArrayUtils"
import { OwnProps, _TodoListEditable as Presentational } from "."

export type ReduxStateProps = {
  todoList: Todo[]
}

export type ReduxDispatchProps = {
  deleteTodo: (todoId: TodoId) => void
  openTodoEditDialog: (todoId: TodoId) => void
  updateTodo: (params: CallPutTodoReq) => void
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

class Container extends React.Component<Props> {
  shouldComponentUpdate = (nextProps: Props): boolean => {
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
    deleteTodo: (id) => dispatch(todoAsyncOperations.deleteTodoRequest({ id })),
    openTodoEditDialog: (editTargetId) =>
      dispatch(todoAsyncOperations.openTodoEditDialog(editTargetId)),
    updateTodo: (params) =>
      dispatch(todoAsyncOperations.updateTodoRequest(params)),
  }
}

export const TodoListEditable = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
