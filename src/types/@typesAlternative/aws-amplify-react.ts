import { Component, FC } from "react"
import { FixMeAny } from "src/types/Utils"

/**
 * 公式の型がまだ不完全なため、より安全に aws-amplify を実装するための型を定義する
 */

/**
 * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Auth/index.tsx#L41-L48
 */
export type withAuthenticator = (
  component: Component | FC,
  /**
   * @see https://aws-amplify.github.io/docs/js/authentication#using-auth-components-in-react--react-native
   */
  includeGreetings?: boolean,
  authenticatorComponents?: (Component | FC)[],
  /**
   * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Auth/Greetings.tsx#L164-L169
   */
  federated?: Record<string, FixMeAny>,
  /**
   * overwrite theme
   * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Amplify-UI/Amplify-UI-Theme.tsx
   */
  theme?: Record<string, FixMeAny>,
  /**
   * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Auth/SignUp.tsx#L49-L55
   */
  signUpConfig?: Record<string, FixMeAny>
) => FixMeAny
