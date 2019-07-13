import { RoutePath } from "constants/Paths"
import { RootState } from "ducks/store"
import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { Redirect, Route, RouteProps } from "react-router-dom"

type ReduxStateProps = {
  isAuthenticated: boolean
}

type OwnProps = {
  // NOP
}

type Props = OwnProps & ReduxStateProps & RouteProps

const _PrivateRoute: React.FC<Props> = ({ isAuthenticated, ...rest }) => {
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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  const { authToken } = state.auth
  return {
    isAuthenticated: !!authToken,
  }
}

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute)
