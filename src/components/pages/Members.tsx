/** @jsx jsx */
import { Card, Header, Image } from "semantic-ui-react"
import { connect } from "react-redux"
import { css, jsx } from "@emotion/core"
import { Dispatch } from "redux"
import { RootState } from "ducks/store"
import { Spinner } from "components/atoms/Spinner"
import { User } from "types/GitHub"
import React from "react"
import { gitHubActions } from "ducks/gitHub"

type ReduxStateProps = {
  isLoading: boolean
  users: User[]
}

type ReduxDispatchProps = {
  fetchMembersStart: (companyName: string) => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

const _Members: React.FC<Props> = ({ fetchMembersStart, isLoading, users }) => {
  const companyName = "facebook"

  React.useEffect(() => {
    fetchMembersStart(companyName)
  }, [fetchMembersStart])

  return (
    <div css={root}>
      <Header as="h2">{companyName}の開発メンバー</Header>
      {isLoading ? (
        <Spinner />
      ) : (
        <Card.Group>
          {users.map((u) => (
            <Card
              key={u.id}
              href={`https://github.com/${u.login}`}
              target="_blank"
            >
              <Card.Content>
                <Image floated="right" size="mini" src={u.avatar_url}></Image>
                <Card.Header>{u.login}</Card.Header>
                <Card.Meta>GitHub ID: {u.id}</Card.Meta>
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

const mapStateToProps = (state: RootState): ReduxStateProps => {
  const { users, isLoading } = state.gitHub
  return {
    isLoading,
    users,
  }
}

const mapDispatchToProps = (dispatch: Dispatch): ReduxDispatchProps => {
  return {
    fetchMembersStart: (companyName) =>
      dispatch(gitHubActions.fetchMembersStart({ companyName })),
  }
}

export const Members = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Members)
