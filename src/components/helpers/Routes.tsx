import React from "react"
import { Route, Switch } from "react-router-dom"
import { Counter } from "src/components/pages/Counter"
import { Login } from "src/components/pages/Login"
import { PrivatePage } from "src/components/pages/Login/PrivatePage"
import { PublicPage } from "src/components/pages/Login/PublicPage"
import { LoginWithAmplify } from "src/components/pages/LoginWithAmplify"
import { Members } from "src/components/pages/Members"
import { NotFound } from "src/components/pages/NotFound"
import { RedditExample } from "src/components/pages/RedditExample"
import { Root } from "src/components/pages/Root"
import { TicTacToePage } from "src/components/pages/TicTacToePage"
import { TodoAsyncPage } from "src/components/pages/TodoAsyncPage"
import { TodoPage } from "src/components/pages/TodoPage"
import { RoutePath } from "src/constants/Paths"
import { PrivateRoute } from "./PrivateRoute"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path={RoutePath.Root} component={Root} />
      <Route exact path={RoutePath.Counter} component={Counter} />
      <Route exact path={RoutePath.Todo} component={TodoPage} />
      <Route exact path={RoutePath.TodoAsync} component={TodoAsyncPage} />
      <Route exact path={RoutePath.TicTacToe} component={TicTacToePage} />
      <Route exact path={RoutePath.GitHubExplorer} component={Members} />
      <Route exact path={RoutePath.Login} component={Login} />
      <Route exact path={RoutePath.Public} component={PublicPage} />
      <PrivateRoute exact path={RoutePath.Private} component={PrivatePage} />
      <Route
        exact
        path={RoutePath.LoginWithAmplify}
        component={LoginWithAmplify}
      />
      <Route
        exact
        path={RoutePath.GitHubExplorer_Members}
        component={Members}
      />
      <Route exact path={RoutePath.RedditExample} component={RedditExample} />

      {/* No route */}
      <Route path={RoutePath.NotFound} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  )
}
