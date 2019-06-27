import { RootState } from "ducks/store"
import { todoAsyncActions } from "ducks/todoAsync"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { _TodoActions as C } from "."

type Props = {
  children?: never
}

export const TodoActions: React.FC<Props> = () => {
  const dispatch = useDispatch()

  const setVisibilityFilter = useCallback(
    (visibilityFilter) =>
      dispatch(todoAsyncActions.setVisibilityFilter({ visibilityFilter })),
    [dispatch]
  )

  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.todoAsync.visibilityFilter
  )

  return (
    <C
      setVisibilityFilter={setVisibilityFilter}
      currentVisibilityFilter={currentVisibilityFilter}
    />
  )
}
