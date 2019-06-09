/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { TTTSquare } from "./TTTSquare"
import React from "react"

type Props = {
  children?: never
}

export const TTTBoard: React.FC<Props> = () => {
  const nextPlayerName = "X"

  return (
    <div>
      <div css={nextPlayer}>Next player: {nextPlayerName}</div>
      <div css={row}>
        <TTTSquare value={"0"} />
        <TTTSquare value={"1"} />
        <TTTSquare value={"2"} />
      </div>
      <div css={row}>
        <TTTSquare value={"3"} />
        <TTTSquare value={"4"} />
        <TTTSquare value={"5"} />
      </div>
      <div css={row}>
        <TTTSquare value={"6"} />
        <TTTSquare value={"7"} />
        <TTTSquare value={"8"} />
      </div>
    </div>
  )
}

const nextPlayer = css`
  margin-bottom: 10px;
`

const row = css`
  clear: both;
  content: "";
  display: table;
`
