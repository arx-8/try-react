/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import Helmet from "react-helmet"

type OwnProps = {
  children?: never
}

export const LoginWithAmplify: React.FC<OwnProps> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>LoginWithAmplify App</title>
      </Helmet>

      <div css={root}>LoginWithAmplify</div>
    </React.Fragment>
  )
}

const root = css`
  margin-left: 40px;
  margin-right: 40px;
`
