declare module "aws-amplify-react" {
  import { Component, FC } from "react"
  import { FixMeAny } from "types/Utils"

  export const ActionRow: FixMeAny
  export const AmazonButton: FixMeAny
  export const AmplifyMessageMapEntries: FixMeAny
  export const AmplifyTheme: FixMeAny
  export const Auth0Button: FixMeAny
  /**
   * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Auth/Authenticator.tsx#L42-L55
   */
  export const Authenticator: FixMeAny
  export const AuthenticatorWrapper: FixMeAny
  export const AuthPiece: FixMeAny
  export const beforeAfter: FixMeAny
  export const Button: FixMeAny
  export const ButtonContent: FixMeAny
  export const ButtonRow: FixMeAny
  export const ChatBot: FixMeAny
  export const Checkbox: FixMeAny
  export const CheckboxRow: FixMeAny
  export const ConfirmSignIn: FixMeAny
  export const ConfirmSignUp: FixMeAny
  export const Connect: FixMeAny
  export const Container: FixMeAny
  export const ErrorSection: FixMeAny
  export const ErrorSectionContent: FixMeAny
  export const FacebookButton: FixMeAny
  export const FederatedButtons: FixMeAny
  export const FederatedSignIn: FixMeAny
  export const ForgotPassword: FixMeAny
  export const FormContainer: FixMeAny
  export const FormRow: FixMeAny
  export const FormSection: FixMeAny
  export const GoogleButton: FixMeAny
  export const Greetings: FixMeAny
  export const InputRow: FixMeAny
  export const Label: FixMeAny
  export const Link: FixMeAny
  export const Loading: FixMeAny
  export const MessageContent: FixMeAny
  export const MessageRow: FixMeAny
  export const Nav: FixMeAny
  export const NavBar: FixMeAny
  export const NavButton: FixMeAny
  export const NavItem: FixMeAny
  export const NavRight: FixMeAny
  export const OAuthButton: FixMeAny
  export const PhotoPicker: FixMeAny
  export const Picker: FixMeAny
  export const propStyle: FixMeAny
  export const Radio: FixMeAny
  export const RadioRow: FixMeAny
  export const RequireNewPassword: FixMeAny
  export const S3Album: FixMeAny
  export const S3Image: FixMeAny
  export const S3Text: FixMeAny
  export const SectionBody: FixMeAny
  export const SectionFooter: FixMeAny
  export const SectionFooterContent: FixMeAny
  export const SectionHeader: FixMeAny
  export const SectionHeaderContent: FixMeAny
  export const SelectMFAType: FixMeAny
  export const SignIn: FixMeAny
  export const SignInButton: FixMeAny
  export const SignOut: FixMeAny
  export const SignUp: FixMeAny
  export const Space: FixMeAny
  export const SumerianScene: FixMeAny
  export const TextPicker: FixMeAny
  export const TOTPSetup: FixMeAny
  export const TOTPSetupComp: FixMeAny
  export const trackLifecycle: FixMeAny
  export const trackUpdate: FixMeAny
  export const transparent1X1: FixMeAny
  export const VerifyContact: FixMeAny
  export const white1X1: FixMeAny
  export const withAmazon: FixMeAny
  export const withAuth0: FixMeAny
  export const withFacebook: FixMeAny
  export const withFederated: FixMeAny
  export const withGoogle: FixMeAny
  export const withOAuth: FixMeAny

  /**
   * @see https://github.com/aws-amplify/amplify-js/blob/c28851a6379f3ba05c4fef529bb5be7f18ebe316/packages/aws-amplify-react/src/Auth/index.tsx#L41-L48
   */
  export const withAuthenticator = (
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
  ): FixMeAny => {}
}
