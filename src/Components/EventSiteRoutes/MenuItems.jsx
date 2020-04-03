import React from "react"
import PropTypes from "prop-types"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { clearParamsAndFetchEventList } from "../EventsListComponents/Redux/Actions"

const styling = { fontSize: "1.5em" }

const NavItem = ({ name, children }) => {
	const dispatch = useDispatch()
	return (
		<Menu.Item
			style={styling}
			as={Link}
			to={"/" + name}
			onClick={() => {
				if (name === "") {
					dispatch(clearParamsAndFetchEventList())
				}
			}}
		>
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
	<NavItem key="home" name="">
		Home
	</NavItem>,
	<NavItem key="about" name="about">
		About
	</NavItem>,
]
