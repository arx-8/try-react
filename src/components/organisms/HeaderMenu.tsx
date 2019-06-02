/** @jsx jsx */
import React from "react"
import { Menu, StrictMenuItemProps } from "semantic-ui-react"
import { withRouter, RouteComponentProps } from "react-router"
import { PathValueDef } from "constants/Paths"
import { Link } from "react-router-dom"
import { css, jsx } from "@emotion/core"

type Props = {
  children?: never
} & RouteComponentProps

type MenuItems = ({
  path: PathValueDef
} & StrictMenuItemProps)[]

const items: MenuItems = [{ path: "/", name: "Top" }]

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
