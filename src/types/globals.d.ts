import { AllowedAny } from "./Utils"

/**
 * 全体で使う型定義
 */

type ExWindow = Partial<{
  /**
   * @see https://github.com/zalmoxisus/redux-devtools-extension#1-with-redux
   */
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function

  __REDUX_INITIAL_STATE__: Record<string, AllowedAny>
}>

export declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends ExWindow {}
}
