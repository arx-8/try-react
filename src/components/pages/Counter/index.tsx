import React from "react"
import { CounterCard } from "components/organisms/CounterCard"
import { ColorfulBeads } from "components/organisms/ColorfulBeads"
import { Container } from "semantic-ui-react"
import { CounterInput } from "components/organisms/CounterInput"

type Props = {
  children?: never
}

export const Counter: React.FC<Props> = () => {
  return (
    <Container>
      <CounterInput />
      <CounterCard />
      <ColorfulBeads />
    </Container>
  )
}
