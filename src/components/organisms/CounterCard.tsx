/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { Card, Statistic, Button } from "semantic-ui-react"

type Props = {
  children?: never
  count: number
  add: (amount: number) => void
  decrement: () => void
  increment: () => void
}

export const CounterCard: React.FC<Props> = ({
  count,
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
        <div css={actionsBottom}>
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

const actionsBottom = css`
  margin-top: 10px;
`
