/**
 * lodash 使うまでもない Array 関係の Util
 */

export const range = (end: number): number[] => {
  return 0 < end ? [...Array(end).keys()] : []
}

export const toUniq = <T extends number | string>(array: T[]): T[] => {
  return [...new Set(array)]
}
