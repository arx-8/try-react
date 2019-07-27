import { RootState } from "ducks/store"
import { todoOperations } from "ducks/todo"
import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { OwnProps, _TodoActions as C } from "."

export const TodoActions: React.FC<OwnProps> = () => {
  const dispatch = useDispatch()

  const setVisibilityFilter = useCallback(
    (visibilityFilter) =>
      dispatch(todoOperations.setVisibilityFilter({ visibilityFilter })),
    [dispatch]
  )

  const currentVisibilityFilter = useSelector(
    (state: RootState) => state.todo.visibilityFilter
  )

  return (
    <C
      setVisibilityFilter={setVisibilityFilter}
      currentVisibilityFilter={currentVisibilityFilter}
    />
  )
}
