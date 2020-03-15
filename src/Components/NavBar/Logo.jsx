import React from "react"
import { Menu, Image } from "semantic-ui-react"

export function Logo() {
	if (!window.REACT_APP_LOGO_URL || window.REACT_APP_LOGO_URL === "%REACT_APP_LOGO_URL%") {
		return null
	}
	return (
		<Menu.Item>
			<Image size="mini" src={window.REACT_APP_LOGO_URL} />
		</Menu.Item>
	)
}
