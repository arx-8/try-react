/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

export const Todo: React.FC<Props> = () => {
  return <div css={root}>Todo</div>
}

const root = css`
  color: green;
`
