/** @jsx jsx */
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
}

export const PublicPage: React.FC<Props> = () => {
  return <h1 css={root}>This is Public page</h1>
}

const root = css`
  color: green;
`
