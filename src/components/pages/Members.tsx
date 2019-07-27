/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Spinner } from "components/atoms/Spinner"
import { InputCompanyName } from "components/organisms/InputCompanyName"
import { DynamicRouteParams } from "constants/Paths"
import { User } from "domain/models/GitHub"
import { gitHubOperations } from "ducks/gitHub"
import { RootState } from "ducks/store"
import React from "react"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { Card, Header, Image } from "semantic-ui-react"
import useReactRouter from "use-react-router"

type ReduxStateProps = {
  isLoading: boolean
  users: User[]
}

type ReduxDispatchProps = {
  fetchMembersStart: (companyName: string) => void
  initializeMembers: () => void
}

type OwnProps = {
  children?: never
}

type Props = OwnProps & ReduxStateProps & ReduxDispatchProps

const _Members: React.FC<Props> = ({
  fetchMembersStart,
  initializeMembers,
  isLoading,
  users,
}) => {
  const { match } = useReactRouter<
    Partial<DynamicRouteParams["GitHubExplorer_Members"]>
  >()
  const { companyName } = match.params

  React.useEffect(() => {
    if (companyName) {
      fetchMembersStart(companyName)
    }
  }, [companyName, fetchMembersStart])

  return (
    <div css={root}>
      <InputCompanyName onReset={initializeMembers} />
      <Header as="h2">
        {companyName
          ? `${companyName}の開発メンバー`
          : `会社名を入力してください`}
      </Header>
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
                <Image floated="right" size="mini" src={u.avatar_url} />
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

const mapStateToProps: MapStateToProps<ReduxStateProps, OwnProps, RootState> = (
  state
) => {
  const { users, isLoading } = state.gitHub
  return {
    isLoading,
    users,
  }
}

const mapDispatchToProps: MapDispatchToPropsFunction<
  ReduxDispatchProps,
  OwnProps
> = (dispatch) => {
  return {
    fetchMembersStart: (companyName) =>
      dispatch(gitHubOperations.fetchMembersStart({ companyName })),
    initializeMembers: () => dispatch(gitHubOperations.initializeMembers()),
  }
}

export const Members = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Members)
