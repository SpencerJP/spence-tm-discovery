import React from "react"
import { PropTypes } from "prop-types"
import { ResponsiveNavbar } from "./ResponsiveNavbar"
import { menuItems } from "../EventSiteRoutes"
import { Logo } from "./Logo"

export function Navbar(props) {
	return (
		<ResponsiveNavbar menuItems={menuItems} style={{ backgroundColor: "#68B9FF" }} logo={<Logo />}>
			{props.children}
		</ResponsiveNavbar>
	)
}

Navbar.propTypes = {
	children: PropTypes.node,
}
