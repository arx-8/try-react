/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Dimmer, Loader, Segment } from "semantic-ui-react"
import React from "react"

type Props = {
  children?: never
}

export const Spinner: React.FC<Props> = () => {
  return (
    <Segment css={root} className="spinner">
      <Dimmer active inverted>
        <Loader inverted={false}>読み込み中...</Loader>
      </Dimmer>
    </Segment>
  )
}

const root = css`
  box-shadow: 0 !important;
  height: 30em;
`
