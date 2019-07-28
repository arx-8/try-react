/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"

type Props = {
  children?: never
}

export const PublicPage: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Public page</title>
      </Helmet>

      <h1 css={root}>This is Public page</h1>
    </React.Fragment>
  )
}

const root = css`
  color: green;
`
