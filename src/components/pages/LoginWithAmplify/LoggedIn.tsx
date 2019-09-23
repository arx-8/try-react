/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Auth } from "aws-amplify"
import React from "react"
import Helmet from "react-helmet"

type OwnProps = {
  children?: never
}

export const LoggedIn: React.FC<OwnProps> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Welcome!</title>
      </Helmet>

      <div css={root}>LoginWithAmplify</div>
      <button
        onClick={async () => {
          // console.log(await Auth.currentUserPoolUser())
          console.log((await Auth.currentSession()).getAccessToken())
        }}
      >
        Check status
      </button>
      <button
        onClick={() => {
          Auth.signOut()
        }}
      >
        Logout
      </button>
    </React.Fragment>
  )
}

const root = css`
  margin-left: 40px;
  margin-right: 40px;
`
