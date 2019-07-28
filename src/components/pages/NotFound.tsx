/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"
import { Link } from "react-router-dom"

export const NotFound: React.FC = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Page not found</title>
      </Helmet>

      <div css={root}>
        <div css={header}>
          <p>Page not found.</p>
          <Link css={link} to="/">
            Go to Top
          </Link>
        </div>
      </div>
    </React.Fragment>
  )
}

const root = css`
  text-align: center;
`

const header = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const link = css`
  color: #61dafb;
`
