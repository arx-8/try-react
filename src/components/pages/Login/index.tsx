/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { Link } from "react-router-dom"
import { RoutePath } from "src/constants/Paths"
import { authOperations, authSelectors } from "src/ducks/auth"
import { RootState } from "src/ducks/store"

type ReduxStateProps = {
  isAuthenticated: boolean
}

type ReduxDispatchProps = {
  login: () => void
  logout: () => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _Login: React.FC<Props> = ({ isAuthenticated, login, logout }) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Login App</title>
      </Helmet>

      <div css={root}>
        <h1>Login example page.</h1>

        <hr />
        <h2>Actions</h2>
        <div css={actions}>
          <button onClick={login}>Login</button>
          <button onClick={logout}>Logout</button>
        </div>

        <hr />
        <h2>Status</h2>
        <div>
          {isAuthenticated ? (
            <span
              css={css`
                color: red;
              `}
            >
              Login
            </span>
          ) : (
            <span>Logout</span>
          )}
        </div>

        <hr />
        <h2>Links</h2>
        <div css={links}>
          <ul>
            <li>
              <Link to={RoutePath.Public}>Public Page</Link>
            </li>
            <li>
              <Link to={RoutePath.Private}>Private Page</Link>
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  )
}

const root = css`
  margin-left: 40px;
  margin-right: 40px;
`

const actions = css`
  & > button {
    margin-left: 8px;
  }
`

const links = css`
  font-size: larger;
`

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    isAuthenticated: authSelectors.isAuthenticated(state.auth),
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    login: () => dispatch(authOperations.login()),
    logout: () => dispatch(authOperations.logout()),
  }
}

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Login)
