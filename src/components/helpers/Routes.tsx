import React from "react"
import { Route, Switch } from "react-router-dom"
import { Root } from "components/pages/Root"
import { NotFound } from "components/pages/NotFound"
import { PATH } from "constants/Paths"
import { Counter } from "components/pages/Counter"
import { TodoPage } from "components/pages/TodoPage"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path={PATH.Root} component={Root} />
      <Route exact path={PATH.Counter} component={Counter} />
      <Route exact path={PATH.Todo} component={TodoPage} />
      <Route component={NotFound} />
    </Switch>
  )
}
