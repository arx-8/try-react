/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { RoutePath } from "constants/Paths"
import { authOperations } from "ducks/auth"
import { RootState } from "ducks/store"
import React from "react"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { Link } from "react-router-dom"

type ReduxStateProps = {
  isAuthed: boolean
}

type ReduxDispatchProps = {
  login: () => void
  logout: () => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _Login: React.FC<Props> = ({ isAuthed, login, logout }) => {
  return (
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
        {isAuthed ? (
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
  const { authToken } = state.auth
  return {
    isAuthed: !!authToken,
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
