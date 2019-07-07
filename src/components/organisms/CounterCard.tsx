/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { counterActions } from "ducks/counter"
import { RootState } from "ducks/store"
import React from "react"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { Button, Card, Statistic } from "semantic-ui-react"

type ReduxStateProps = {
  count: number
  defaultAmount: number
}

type ReduxDispatchProps = {
  add: (amount: number) => void
  decrement: () => void
  increment: () => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _CounterCard: React.FC<Props> = ({
  count,
  defaultAmount,
  add,
  decrement,
  increment,
}) => {
  return (
    <Card>
      <Statistic css={numberBoard}>
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div>
          <Button color="red" onClick={decrement}>
            -1
          </Button>
          <Button color="red" onClick={increment}>
            +1
          </Button>
        </div>
        <div css={actionsSeparator}>
          <Button color="red" onClick={() => add(defaultAmount * -1)}>
            -{defaultAmount}
          </Button>
          <Button color="red" onClick={() => add(defaultAmount)}>
            +{defaultAmount}
          </Button>
        </div>
        <div css={actionsSeparator}>
          <Button fluid color="grey" onClick={() => add(10)}>
            +10
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

const numberBoard = css`
  margin-top: 15px !important;
`

const actionsSeparator = css`
  margin-top: 10px;
`

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  return {
    count: state.counter.count,
    defaultAmount: state.counter.defaultAmount,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    add: (amount) => dispatch(counterActions.add(amount)),
    decrement: () => dispatch(counterActions.decrement()),
    increment: () => dispatch(counterActions.increment()),
  }
}

export const CounterCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(_CounterCard)
