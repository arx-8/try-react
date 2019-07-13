import { RoutePath } from "constants/Paths"
import React from "react"
import { Redirect, Route, RouteProps } from "react-router-dom"

type OwnProps = {
  isAuthenticated?: boolean
}

type Props = OwnProps & RouteProps

export const PrivateRoute: React.FC<Props> = ({ isAuthenticated, ...rest }) => {
  if (!isAuthenticated) {
    return (
      <Redirect
        to={{
          pathname: RoutePath.NotFound,
          state: { from: rest.location },
        }}
      />
    )
  }

  return <Route {...rest} />
}
