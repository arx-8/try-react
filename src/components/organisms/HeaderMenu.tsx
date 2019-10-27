/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { NavLink } from "react-router-dom"
import { Menu, StrictMenuItemProps } from "semantic-ui-react"
import { RoutePath, RoutePathValue } from "src/constants/Paths"

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
  { path: RoutePath.TodoAsync, name: "TodoAsync" },
  { path: RoutePath.TicTacToe, name: "TicTacToe" },
  { path: RoutePath.GitHubExplorer, name: "GitHubExplorer" },
  { path: RoutePath.RedditExample, name: "RedditExample" },
  { path: RoutePath.Login, name: "Login" },
  { path: RoutePath.LoginWithAmplify, name: "LoginWithAmplify" },
]

export const HeaderMenu: React.FC<Props> = () => {
  return (
    <Menu>
      {items.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          css={link}
          activeStyle={{
            background: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <Menu.Item name={item.name} />
        </NavLink>
      ))}
    </Menu>
  )
}

const link = css`
  cursor: pointer;
`
