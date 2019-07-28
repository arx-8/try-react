/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"

type Props = {
  children?: never
}

export const PrivatePage: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Private page</title>
      </Helmet>

      <h1 css={root}>This is Private page</h1>
    </React.Fragment>
  )
}

const root = css`
  color: red;
`
