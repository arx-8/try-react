import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "src/ducks/store"
import { todoAsyncOperations } from "src/ducks/todoAsync"
import { OwnProps, _TodoActions as C } from "."

export const TodoActions: React.FC<OwnProps> = () => {
  const dispatch = useDispatch()

  const setVisibilityFilter = useCallback(
    (visibilityFilter) =>
      dispatch(todoAsyncOperations.setVisibilityFilter({ visibilityFilter })),
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
