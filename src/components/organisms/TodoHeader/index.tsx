/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import IconButton from "@material-ui/core/IconButton"
import LinearProgress from "@material-ui/core/LinearProgress"
import RefreshIcon from "@material-ui/icons/Refresh"
import React from "react"
import { TodoAvailableTimer } from "../TodoAvailableTimer"

export type ReduxStateProps = {
  errorMessage?: string
  loading: boolean
}

export type ReduxDispatchProps = {
  fetchAllTodos: () => Promise<void>
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

export const _TodoHeader: React.FC<Props> = ({
  errorMessage,
  fetchAllTodos,
  loading,
}) => {
  return (
    <div>
      <div css={errMsg}>{errorMessage}</div>
      <div css={actions}>
        <IconButton onClick={fetchAllTodos}>
          <RefreshIcon />
        </IconButton>
        <TodoAvailableTimer />
      </div>
      <div css={loadingArea}>{loading && <LinearProgress />}</div>
    </div>
  )
}

const errMsg = css`
  color: red;
`

const actions = css`
  text-align: right;
`

const loadingArea = css`
  height: 8px;
`
