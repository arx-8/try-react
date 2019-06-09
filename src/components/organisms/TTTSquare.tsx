/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { InputValue } from "ducks/tic-tac-toe/types"
import React from "react"

type Props = {
  children?: never
  value: InputValue | any
}

export const TTTSquare: React.FC<Props> = ({ value }) => {
  return <button css={root}>{value}</button>
}

const root = css`
  background: #fff;
  float: left;
  font-size: 24px;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;

  &:focus {
    outline: none;
  }
`
