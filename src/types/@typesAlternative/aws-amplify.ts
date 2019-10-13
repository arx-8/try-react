/**
 * 公式の型がまだ不完全なため、より安全に aws-amplify を実装するための型を定義する
 */

export type AmplifyConfig = {
  Auth: {
    identityPoolId: string
    region: string
    userPoolId: string
    userPoolWebClientId: string
  }
}

/**
 * @see https://aws-amplify.github.io/docs/js/authentication#show-your-app-after-sign-in
 */
type AuthState =
  | "signIn"
  | "signUp"
  | "confirmSignIn"
  | "confirmSignUp"
  | "forgotPassword"
  | "requireNewPassword"
  | "verifyContact"
  | "signedIn"
  // No document, But exists
  | "loading"

/**
 * `Auth.currentUserPoolUser` return value
 * (Throws Error if no login)
 * @see amazon-cognito-identity-js/src/CognitoUser.js
 */
export type CognitoUser = {
  username: string
  pool: {
    userPoolId: string
    clientId: string
    client: {
      endpoint: string
      userAgent: string
    }
    advancedSecurityDataCollectionFlag: boolean
    storage: {
      [key: string]: string
    }
  }
  Session: null
  client: {
    endpoint: string
    userAgent: string
  }
  signInUserSession: {
    idToken: {
      jwtToken: string
      payload: {
        sub: string
        aud: string
        email_verified: boolean
        event_id: string
        token_use: "id" | string
        /** UNIX time */
        auth_time: number
        iss: string
        "cognito:username": string
        /** UNIX time */
        exp: number
        /** UNIX time */
        iat: number
        email: string
      }
    }
    refreshToken: {
      token: string
    }
    accessToken: {
      jwtToken: string
      payload: {
        sub: string
        event_id: string
        token_use: string
        scope: string
        /** UNIX time */
        auth_time: number
        iss: string
        /** UNIX time */
        exp: number
        /** UNIX time */
        iat: number
        jti: string
        client_id: string
        username: string
      }
    }
    clockDrift: number
  }
  authenticationFlowType: "USER_SRP_AUTH" | string
  storage: {
    [key: string]: string
  }
  keyPrefix: string
  userDataKey: string
  attributes: {
    sub: string
    email_verified: boolean
    email: string
  }
  preferredMFA: string
}
