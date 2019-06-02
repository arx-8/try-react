import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { Root } from "components/pages/Root"
import { NotFound } from "components/pages/NotFound"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Root} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}
