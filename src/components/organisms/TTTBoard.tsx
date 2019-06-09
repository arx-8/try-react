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
      <div css={container}>
        <TTTSquare value={"O"} />
        <TTTSquare value={"1"} />
        <TTTSquare value={"2"} />
        <TTTSquare value={"3"} />
        <TTTSquare value={null} />
        <TTTSquare value={"5"} />
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

const container = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`
