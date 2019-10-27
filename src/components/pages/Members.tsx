/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React, { useEffect } from "react"
import Helmet from "react-helmet"
import {
  connect,
  MapDispatchToPropsFunction,
  MapStateToProps,
} from "react-redux"
import { useParams } from "react-router"
import { Card, Header, Image } from "semantic-ui-react"
import { Spinner } from "src/components/atoms/Spinner"
import { InputCompanyName } from "src/components/organisms/InputCompanyName"
import { DynamicRouteParams } from "src/constants/Paths"
import { User } from "src/domain/models/GitHub"
import { gitHubOperations } from "src/ducks/gitHub"
import { RootState } from "src/ducks/store"

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
  const { companyName } = useParams<
    Partial<DynamicRouteParams["GitHubExplorer_Members"]>
  >()

  useEffect(() => {
    // 空検索（例えばページの初期表示）はしないため
    if (companyName) {
      fetchMembersStart(companyName)
    }
  }, [companyName, fetchMembersStart])

  return (
    <React.Fragment>
      <Helmet>
        <title>GitHubExplorer App</title>
      </Helmet>

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
    </React.Fragment>
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
