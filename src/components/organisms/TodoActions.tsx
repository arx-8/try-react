/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

export const TodoActions: React.FC<Props> = () => {
  return <div css={root}>TodoActions</div>
}

const root = css`
  color: blue;
`
