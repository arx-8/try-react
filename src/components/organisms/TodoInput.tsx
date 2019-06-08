/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

export const TodoInput: React.FC<Props> = () => {
  return <div css={root}>TodoInput</div>
}

const root = css`
  color: red;
`
