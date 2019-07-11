import { RootState } from "ducks/store"

const get10PerCount = (counter: RootState): number => {
  return Math.ceil(counter.counter.count / 10)
}

export const selectors = {
  get10PerCount,
}
