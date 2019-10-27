import { Brand, CastAny, ValueOf } from "src/types/Utils"

/**
 * react-router用のパスの定義
 */
const _RoutePath = {
  Root: "/",
  Counter: "/counter",
  Todo: "/todo",
  TodoAsync: "/todo-async",
  TicTacToe: "/tic-tac-toe",
  GitHubExplorer: "/github-explorer",
  GitHubExplorer_Members: "/github-explorer/:companyName/members",
  RedditExample: "/reddit-example",
  Login: "/login",
  LoginWithAmplify: "/login-with-amplify",
  Private: "/private",
  Public: "/public",
  NotFound: "/notfound",
} as const

type RoutePathKey = keyof typeof _RoutePath

export type RoutePathValue = Brand<ValueOf<typeof _RoutePath>, "RoutePathValue">
export const RoutePath: Record<
  RoutePathKey,
  RoutePathValue
> = _RoutePath as CastAny

/**
 * 動的なパスの定義
 */
export const DynamicRoutePath = {
  GitHubExplorer_Members: (companyName: string) => {
    return RoutePath.GitHubExplorer_Members.replace(":companyName", companyName)
  },
} as const

export type DynamicRouteParams = {
  GitHubExplorer_Members: {
    companyName: string
  }
}

// インテリセンスを無効にさせたくないため、直接型指定できない定義の型チェック
// RoutePath 存在しないパスを定義した時に、ここでエラーが発生して、定義ミスを発見できる
type DynamicRoutePathKey = keyof typeof DynamicRoutePath
type KeyCheck = RoutePathKey | DynamicRoutePathKey
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _: RoutePathKey = (null as CastAny) as KeyCheck

type DynamicRouteParamsKey = keyof DynamicRouteParams
type KeyCheck2 = RoutePathKey | DynamicRouteParamsKey
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _2: RoutePathKey = (null as CastAny) as KeyCheck2
