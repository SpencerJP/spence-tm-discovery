import React from "react"
import PropTypes from "prop-types"
import { Button, Icon } from "semantic-ui-react"

/**
 * button to open this event on the ticketmaster site
 */
export function ViewOnTicketMasterButton(props) {
	// if (props.mobile) {
	// 	return null
	// }
	return (
		<Button floated="right" color="blue" onClick={() => window.open(props.ticketMasterURL, "_blank")}>
			{!props.mobile && "View On TicketMaster"}
			<Icon
				name={props.mobile ? "chevron right" : "external square alternate"} // the external button looks weird without context text.
				style={props.mobile ? { marginRight: "0.3em" } : { marginLeft: "0.3em" }}
			></Icon>
		</Button>
	)
}

ViewOnTicketMasterButton.propTypes = {
	mobile: PropTypes.bool,
	ticketMasterURL: PropTypes.string.isRequired,
}
