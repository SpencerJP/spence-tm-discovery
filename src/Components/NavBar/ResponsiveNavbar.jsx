/* eslint-disable react/prop-types */

/*
 * This code is sourced from https://codesandbox.io/s/325y47xk36 and modified to fit my purposes
 * it implements a responsive navbar, which Semantic UI doesn't have yet.
 * credits to https://codesandbox.io/u/layershifter (Semantic UI React dev)
 */

import React, { Component } from "react"
import { Container, Icon, Menu, Sidebar, Responsive } from "semantic-ui-react"
import { useSearchMenu } from "./useSearchMenu"

const SidebarMenu = ({ items }) => {
	return <Menu>{items.menuItems}</Menu>
}

const NavBarMobile = ({ children, menuItems, onPusherClick, onToggle, visible, logo, inverted }) => {
	const searchMenu = useSearchMenu()
	return (
		<Sidebar.Pushable>
			<Sidebar
				as={SidebarMenu}
				icon="labeled"
				items={menuItems}
				animation="overlay"
				vertical
				visible={visible}
			/>
			<Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: "100vh" }}>
				<Menu fixed="top" inverted={inverted}>
					{logo}
					<Menu.Item onClick={onToggle}>
						<Icon name="sidebar" />
					</Menu.Item>
				</Menu>
				{searchMenu}
				{children}
			</Sidebar.Pusher>
		</Sidebar.Pushable>
	)
}

const NavBarDesktop = ({ logo, menuItems, inverted }) => {
	const searchMenu = useSearchMenu()
	return (
		<>
			<Menu fixed="top" inverted={inverted}>
				{logo}
				{/* <Menu.Item>
			<Image size="mini" src="https://react.semantic-ui.com/logo.png" />
		</Menu.Item> */}
				{menuItems}
				{/* <Menu.Menu position="right">{rightItems}</Menu.Menu> */}
			</Menu>
			{searchMenu}
		</>
	)
}

const NavBarChildren = ({ children, style }) => (
	<div style={{ style }}>
		<Container className="navbar-child" style={{ marginTop: "5em" }}>
			{children}
		</Container>
	</div>
)

export class ResponsiveNavbar extends Component {
	state = {
		visible: false,
	}

	handlePusher = () => {
		const { visible } = this.state

		if (visible) this.setState({ visible: false })
	}

	handleToggle = () => this.setState({ visible: !this.state.visible })

	render() {
		const { children, menuItems, inverted, style } = this.props
		const { visible } = this.state
		return (
			<div style={style}>
				<Responsive {...Responsive.onlyMobile}>
					<NavBarMobile
						menuItems={{ menuItems }}
						onPusherClick={this.handlePusher}
						onToggle={this.handleToggle}
						visible={visible}
						inverted={inverted}
					>
						<NavBarChildren style={{ style }}>{children}</NavBarChildren>
					</NavBarMobile>
				</Responsive>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<NavBarDesktop menuItems={menuItems} inverted={inverted} />
					<NavBarChildren style={{ style }}>{children}</NavBarChildren>
				</Responsive>
			</div>
		)
	}
}
