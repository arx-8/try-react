import React from "react"
import Helmet from "react-helmet"
import { Container } from "semantic-ui-react"
import { ColorfulBeads } from "src/components/organisms/ColorfulBeads"
import { CounterCard } from "src/components/organisms/CounterCard"
import { CounterInput } from "src/components/organisms/CounterInput"

type Props = {
  children?: never
}

export const Counter: React.FC<Props> = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Counter App</title>
      </Helmet>

      <Container>
        <CounterInput />
        <CounterCard />
        <ColorfulBeads />
      </Container>
    </React.Fragment>
  )
}
