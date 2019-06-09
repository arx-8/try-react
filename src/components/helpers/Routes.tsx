import { Counter } from "components/pages/Counter"
import { NotFound } from "components/pages/NotFound"
import { PATH } from "constants/Paths"
import { Root } from "components/pages/Root"
import { Route, Switch } from "react-router-dom"
import { TicTacToePage } from "components/pages/TicTacToePage"
import { TodoPage } from "components/pages/TodoPage"
import React from "react"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path={PATH.Root} component={Root} />
      <Route exact path={PATH.Counter} component={Counter} />
      <Route exact path={PATH.Todo} component={TodoPage} />
      <Route exact path={PATH.TicTacToe} component={TicTacToePage} />
      <Route component={NotFound} />
    </Switch>
  )
}
