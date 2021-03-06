import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

const styling = { fontSize: "1.5em" }

const NavItem = ({ name, children }) => {
	return (
		<Menu.Item style={styling} as={Link} to={"/" + name}>
			{children}
		</Menu.Item>
	)
}

NavItem.propTypes = {
	name: PropTypes.string,
	children: PropTypes.string,
}

// navbar items
export const menuItems = [
	<NavItem key="home" name="home">
		Home
	</NavItem>,
	<NavItem key="about" name="about">
		About
	</NavItem>,
]
