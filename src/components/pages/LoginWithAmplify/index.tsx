/** @jsx jsx */
import { jsx } from "@emotion/core"
import Amplify from "aws-amplify"
import { withAuthenticator } from "aws-amplify-react"
import React from "react"
import Helmet from "react-helmet"
import {
  COGNITO_APP_CLIENT_ID,
  COGNITO_IDENTITY_POOL_ID,
  COGNITO_REGION,
  COGNITO_USER_POOL_ID,
} from "src/constants/Env"
import { AmplifyConfig } from "src/types/@typesAlternative/aws-amplify"
import { LoggedIn } from "./LoggedIn"

/**
 * @see https://aws-amplify.github.io/docs/js/authentication#manual-setup
 */
const config: AmplifyConfig = {
  Auth: {
    identityPoolId: COGNITO_IDENTITY_POOL_ID,
    region: COGNITO_REGION,
    userPoolId: COGNITO_USER_POOL_ID,
    userPoolWebClientId: COGNITO_APP_CLIENT_ID,
  },
}
Amplify.configure(config)

type OwnProps = {
  children?: never
}

const _LoginWithAmplify: React.FC<OwnProps> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>LoginWithAmplify App</title>
      </Helmet>

      <LoggedIn />
    </React.Fragment>
  )
}

export const LoginWithAmplify = withAuthenticator(_LoginWithAmplify)
