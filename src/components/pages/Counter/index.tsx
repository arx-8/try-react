import React from "react"
import { CounterCard } from "components/organisms/CounterCard"
import { ColorfulBeads } from "components/organisms/ColorfulBeads"
import { Container } from "semantic-ui-react"

type Props = {
  children?: never
}

export const Counter: React.FC<Props> = () => {
  return (
    <Container>
      <CounterCard />
      <ColorfulBeads />
    </Container>
  )
}
