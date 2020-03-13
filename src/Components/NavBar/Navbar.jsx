import React from "react"
import { PropTypes } from "prop-types"
import { ResponsiveNavbar } from "./ResponsiveNavbar"
import { menuItems } from "../EventSiteRoutes"

export function Navbar(props) {
	return (
		<ResponsiveNavbar leftItems={menuItems} rightItems={<></>}>
			{props.children}
		</ResponsiveNavbar>
	)
}

Navbar.propTypes = {
	children: PropTypes.node,
}
