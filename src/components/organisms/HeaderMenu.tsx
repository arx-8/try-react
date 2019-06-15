/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "react-router-dom"
import { Menu, StrictMenuItemProps } from "semantic-ui-react"
import { RoutePath, RoutePathValue } from "constants/Paths"
import React from "react"
import useReactRouter from "use-react-router"

type Props = {
  children?: never
}

type MenuItems = ({
  path: RoutePathValue
} & StrictMenuItemProps)[]

const items: MenuItems = [
  { path: RoutePath.Root, name: "Top" },
  { path: RoutePath.Counter, name: "Counter" },
  { path: RoutePath.Todo, name: "Todo" },
  { path: RoutePath.TicTacToe, name: "TicTacToe" },
  { path: RoutePath.GitHubExplorer, name: "GitHubExplorer" },
]

export const HeaderMenu: React.FC<Props> = () => {
  const { location } = useReactRouter()

  return (
    <Menu>
      {items.map((item) => (
        <Link key={item.path} to={item.path} css={link}>
          <Menu.Item
            name={item.name}
            active={location.pathname === item.path}
          />
        </Link>
      ))}
    </Menu>
  )
}

const link = css`
  cursor: pointer;
`
