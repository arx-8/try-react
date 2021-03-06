import React from "react"
import { connect, MapStateToProps } from "react-redux"
import { Redirect, Route, RouteProps } from "react-router-dom"
import { RoutePath } from "src/constants/Paths"
import { authSelectors } from "src/ducks/auth"
import { RootState } from "src/ducks/store"

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
  return {
    isAuthenticated: authSelectors.isAuthenticated(state.auth),
  }
}

export const PrivateRoute = connect(mapStateToProps)(_PrivateRoute)
