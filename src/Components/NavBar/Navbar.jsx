import React from "react"
import { PropTypes } from "prop-types"
import { ResponsiveNavbar } from "./ResponsiveNavbar"
import { menuItems } from "../EventSiteRoutes"

export function Navbar(props) {
	return (
		<ResponsiveNavbar menuItems={menuItems} style={{ backgroundColor: "#68B9FF" }}>
			{props.children}
		</ResponsiveNavbar>
	)
}

Navbar.propTypes = {
	children: PropTypes.node,
}
