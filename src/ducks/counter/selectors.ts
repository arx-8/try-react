import { CounterState } from "./reducers"

export const get10PerCount = (counter: CounterState): number => {
  return Math.ceil(counter.count / 10)
}
