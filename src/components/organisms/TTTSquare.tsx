/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { InputValue } from "src/ducks/tic-tac-toe/types"

type Props = {
  children?: never
  disabled: boolean
  onClick: () => void
  value: InputValue
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
