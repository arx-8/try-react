import { Brand } from "types/Utils"

/**
 * react-router用のパスの定義
 */
const _RoutePath = {
  Root: "/",
  Counter: "/counter",
  Todo: "/todo",
  TicTacToe: "/tic-tac-toe",
  GitHubExplorer: "/github-explorer",
  GitHubExplorer_Members: "/github-explorer/:companyName/members",
}

// Nominal Typing しつつ、key名のインテリセンスも効くようにするため
type RoutePathKey = keyof typeof _RoutePath

export type RoutePathType = Brand<RoutePathKey, "RoutePathType">
export const RoutePath: Record<RoutePathKey, RoutePathType> = _RoutePath as any

/**
 * 動的なパスの定義
 */
export const DynamicRoutePath = {
  GitHubExplorer_Members: (companyName: string) => {
    return RoutePath.GitHubExplorer_Members.replace(":companyName", companyName)
  },
}

export type DynamicRouteParams = {
  GitHubExplorer_Members: {
    companyName: string
  }
}

// インテリセンスが無効にさせないため、直接型指定できない定義の型チェック
// RoutePath 存在しないパスを定義した時に、ここでエラーが発生して、定義ミスを発見できる
type DynamicRoutePathKey = keyof typeof DynamicRoutePath
type KeyCheck = RoutePathKey | DynamicRoutePathKey
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _: RoutePathKey = (null as any) as KeyCheck

type DynamicRouteParamsKey = keyof DynamicRouteParams
type KeyCheck2 = RoutePathKey | DynamicRouteParamsKey
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _2: RoutePathKey = (null as any) as KeyCheck2
