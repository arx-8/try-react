/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import IconButton from "@material-ui/core/IconButton"
import LinearProgress from "@material-ui/core/LinearProgress"
import RefreshIcon from "@material-ui/icons/Refresh"
import React from "react"

export type ReduxStateProps = {
  loading: boolean
}

export type ReduxDispatchProps = {
  fetchAllTodos: () => void
}

type Props = {
  children?: never
} & ReduxStateProps &
  ReduxDispatchProps

export const _TodoHeader: React.FC<Props> = ({ fetchAllTodos, loading }) => {
  return (
    <div>
      <div css={actions}>
        <IconButton onClick={fetchAllTodos}>
          <RefreshIcon />
        </IconButton>
      </div>
      <div css={loadingArea}>{loading && <LinearProgress />}</div>
    </div>
  )
}

const actions = css`
  text-align: right;
`

const loadingArea = css`
  height: 8px;
`
