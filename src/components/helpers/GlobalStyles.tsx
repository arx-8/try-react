import React from "react"
import { Global, css } from "@emotion/core"
import emotionNormalize from "emotion-normalize"

type Props = {
  children?: never
}

export const GlobalStyles: React.FC<Props> = () => {
  return <Global styles={globalStyles} />
}

const globalStyles = css`
  ${emotionNormalize}
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
