/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { InputValue } from "ducks/tic-tac-toe/types"
import React from "react"

type Props = {
  children?: never
  disabled: boolean
  onClick: () => void
  value: InputValue | any
}

export const TTTSquare: React.FC<Props> = ({ disabled, value, onClick }) => {
  return (
    <button css={root} onClick={onClick} disabled={disabled}>
      {value}
    </button>
  )
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
