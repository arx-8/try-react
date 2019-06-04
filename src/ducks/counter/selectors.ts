import { CounterState } from "./reducers"

const get10PerCount = (counter: CounterState): number => {
  return Math.ceil(counter.count / 10)
}

export const selectors = {
  get10PerCount,
}
