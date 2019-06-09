/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

type Props = {
  children?: never
}

export const TTTGameInfo: React.FC<Props> = () => {
  return <div css={root}>TTTGameInfo</div>
}

const root = css`
  margin-left: 20px;
`
