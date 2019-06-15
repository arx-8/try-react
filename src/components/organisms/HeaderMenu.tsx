/** @jsx jsx */
import React from "react"
import { Menu, StrictMenuItemProps } from "semantic-ui-react"
import { withRouter, RouteComponentProps } from "react-router"
import { Link } from "react-router-dom"
import { css, jsx } from "@emotion/core"
import { RoutePath, RoutePathType } from "constants/Paths"

type Props = {
  children?: never
} & RouteComponentProps

type MenuItems = ({
  path: RoutePathType
} & StrictMenuItemProps)[]

const items: MenuItems = [
  { path: RoutePath.Root, name: "Top" },
  { path: RoutePath.Counter, name: "Counter" },
  { path: RoutePath.Todo, name: "Todo" },
  { path: RoutePath.TicTacToe, name: "TicTacToe" },
  { path: RoutePath.GitHubExplorer, name: "GitHubExplorer" },
]

const _HeaderMenu: React.FC<Props> = ({ location }) => {
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

export const HeaderMenu = withRouter(_HeaderMenu)
