/** @jsx jsx */
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

export const PrivatePage: React.FC<Props> = () => {
  return <h1 css={root}>This is Private page</h1>
}

const root = css`
  color: red;
`
