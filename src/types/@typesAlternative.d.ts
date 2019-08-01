import { FixMeAny } from "./Utils"

/**
 * @types のないライブラリのための定義
 */

declare module "emotion-normalize"

/**
 * DefinitelyTyped にある定義が 1.x (beta) 用なため、0.x用に上書き
 */
declare module "redux-localstorage" {
  // eslint-disable-next-line import/no-default-export
  export default function persistState(
    paths: string[],
    config?: Record<string, FixMeAny>
  ): FixMeAny
}
