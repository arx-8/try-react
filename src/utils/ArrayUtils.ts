import { Brand, CastAny } from "src/types/Utils"

/**
 * lodash 使うまでもない Array 関係の Util
 */

export const range = (end: number): number[] => {
  return 0 < end ? [...Array(end).keys()] : []
}

export const toUniq = <T extends number | string>(array: T[]): T[] => {
  return [...new Set(array)]
}

type SortedArray<T> = Brand<T[], "SortedArray">

/**
 * params array must be sorted.
 */
export const equals = <T>(
  arr1: SortedArray<T>,
  arr2: SortedArray<T>,
  predicate: (elm1: T, elm2: T) => boolean
): boolean => {
  const arrLen = arr1.length
  if (arrLen !== arr2.length) {
    return false
  }

  for (let index = 0; index < arrLen; index++) {
    const e1 = arr1[index]
    const e2 = arr2[index]
    if (!predicate(e1, e2)) {
      return false
    }
  }
  return true
}

/**
 * Nondestructive sorting
 */
export const sort = <T>(
  arr: T[],
  compareFn: (a: T, b: T) => number
): SortedArray<T> => {
  return arr.slice().sort(compareFn) as CastAny
}
