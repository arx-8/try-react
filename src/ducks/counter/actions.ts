export enum CounterActionType {
  ADD = "COUNTER/ADD",
  DECREMENT = "COUNTER/DECREMENT",
  INCREMENT = "COUNTER/INCREMENT",
}

export type CounterAction = {
  type: CounterActionType
  amount?: number
}

const add = (amount: number): CounterAction => {
  return {
    type: CounterActionType.ADD,
    amount,
  }
}

const decrement = (): CounterAction => {
  return {
    type: CounterActionType.DECREMENT,
  }
}

const increment = (): CounterAction => {
  return {
    type: CounterActionType.INCREMENT,
  }
}

export const actions = {
  add,
  decrement,
  increment,
}
