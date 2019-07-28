import { ColorfulBeads } from "components/organisms/ColorfulBeads"
import { CounterCard } from "components/organisms/CounterCard"
import { CounterInput } from "components/organisms/CounterInput"
import React from "react"
import Helmet from "react-helmet"
import { Container } from "semantic-ui-react"

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
