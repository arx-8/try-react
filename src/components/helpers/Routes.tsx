import React from "react"
import { Route, Switch } from "react-router-dom"
import { Root } from "components/pages/Root"
import { NotFound } from "components/pages/NotFound"
import { PATH } from "constants/Paths"

type Props = {
  children?: never
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Route exact path={PATH.Root} component={Root} />
      <Route component={NotFound} />
    </Switch>
  )
}
