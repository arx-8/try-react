/** @jsx jsx */
import { Card, Header, Image } from "semantic-ui-react"
import { css, jsx } from "@emotion/core"
import { Spinner } from "components/atoms/Spinner"
import { User } from "types/GitHub"
import React from "react"

type Props = {
  children?: never
}

export const Members: React.FC<Props> = () => {
  const isLoading = true
  const users: User[] = []
  const companyName = "<会社名>"

  return (
    <div css={root}>
      <Header as="h2">{companyName}の開発メンバー</Header>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <Card.Group>
          {users.map((u) => (
            <Card
              key={u.id}
              href={`https://github.com/${u.login}`}
              target="_blank"
            >
              <Card.Content>
                <Image floated="right" size="mini" src={u.avatar_url}>
                  <Card.Header>{u.login}</Card.Header>
                  <Card.Meta>GitHub ID: {u.id}</Card.Meta>
                </Image>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      )}
    </div>
  )
}

const root = css`
  margin: 2em 1.5em;
`
