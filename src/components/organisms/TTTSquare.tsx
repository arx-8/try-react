/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"

type Props = {
  children?: never
  value: string
}

export const TTTSquare: React.FC<Props> = ({ value }) => {
  return <button css={root}>{value}</button>
}

const root = css`
  background: #fff;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
`
