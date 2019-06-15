import { Counter } from "components/pages/Counter"
import { Members } from "components/pages/Members"
import { NotFound } from "components/pages/NotFound"
import { Root } from "components/pages/Root"
import { Route, Switch } from "react-router-dom"
import { RoutePath } from "constants/Paths"
import { TicTacToePage } from "components/pages/TicTacToePage"
import { TodoPage } from "components/pages/TodoPage"
import React from "react"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Root} component={Root} />
      <Route exact path={RoutePath.Counter} component={Counter} />
      <Route exact path={RoutePath.Todo} component={TodoPage} />
      <Route exact path={RoutePath.TicTacToe} component={TicTacToePage} />
      <Route exact path={RoutePath.GitHubExplorer} component={Members} />
      <Route
        exact
        path={RoutePath.GitHubExplorer_Members}
        component={Members}
      />
      <Route component={NotFound} />
    </Switch>
  )
}
