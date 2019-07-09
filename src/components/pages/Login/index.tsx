/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Link } from "react-router-dom"
import { RoutePath } from "constants/Paths"

type Props = {
  children?: never
}

export const Login: React.FC<Props> = () => {
  return (
    <div css={root}>
      <h1>Login example page.</h1>

      <hr />
      <h2>Actions</h2>
      <div css={actions}>
        {/* TODO */}
        <button>Login</button>
        <button>Logout</button>
      </div>

      <hr />
      <h2>Status</h2>
      <div>Logout</div>

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
