import React from "react"

import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

export const menuItems = [
	<Menu.Item key="home" as={Link} to="/home">
		Home
	</Menu.Item>,
	<Menu.Item key="eventview" as={Link} to="/eventview">
		Event Lookup
	</Menu.Item>,
	<Menu.Item key="about" as={Link} to="/about">
		About
	</Menu.Item>,
]
