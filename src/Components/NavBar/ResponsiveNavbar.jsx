/* eslint-disable react/prop-types */

/*
 * This code is sourced from https://codesandbox.io/s/325y47xk36 and modified to fit my purposes
 * it implements a responsive navbar, which Semantic UI doesn't have yet.
 * credits to https://codesandbox.io/u/layershifter (Semantic UI React dev)
 */

import React, { Component } from "react"
import { Container, Icon, Menu, Sidebar, Responsive } from "semantic-ui-react"

const NavBarMobile = ({ children, items, onPusherClick, onToggle, visible, logo, inverted }) => (
	<Sidebar.Pushable>
		<Sidebar
			as={Menu}
			animation="overlay"
			icon="labeled"
			inverted={inverted}
			items={items}
			vertical
			visible={visible}
		/>
		<Sidebar.Pusher dimmed={visible} onClick={onPusherClick} style={{ minHeight: "100vh" }}>
			<Menu fixed="top" inverted>
				{logo}
				<Menu.Item onClick={onToggle}>
					<Icon name="sidebar" title />
				</Menu.Item>
			</Menu>
			{children}
		</Sidebar.Pusher>
	</Sidebar.Pushable>
)

const NavBarDesktop = ({ logo, leftItems, rightItems, inverted }) => (
	<Menu fixed="top" inverted={inverted}>
		{logo}
		{/* <Menu.Item>
			<Image size="mini" src="https://react.semantic-ui.com/logo.png" />
		</Menu.Item> */}
		{leftItems}
		<Menu.Menu position="right">{rightItems}</Menu.Menu>
	</Menu>
)

const NavBarChildren = ({ children }) => <Container style={{ marginTop: "5em" }}>{children}</Container>

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
		const { children, leftItems, rightItems } = this.props
		const { visible } = this.state

		return (
			<div>
				<Responsive {...Responsive.onlyMobile}>
					<NavBarMobile
						items={{ ...leftItems, ...rightItems }}
						onPusherClick={this.handlePusher}
						onToggle={this.handleToggle}
						visible={visible}
					>
						<NavBarChildren>{children}</NavBarChildren>
					</NavBarMobile>
				</Responsive>
				<Responsive minWidth={Responsive.onlyTablet.minWidth}>
					<NavBarDesktop leftItems={leftItems} rightItems={rightItems} />
					<NavBarChildren>{children}</NavBarChildren>
				</Responsive>
			</div>
		)
	}
}
