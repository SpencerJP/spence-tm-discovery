import React from "react"
import PropTypes from "prop-types"
import { Button, Icon } from "semantic-ui-react"

/**
 * button to open this event on the ticketmaster site
 */
export function ViewOnTicketMasterButton(props) {
	if (props.mobile) {
		return null
	}
	return (
		<Button floated="right" color="blue" onClick={() => window.open(props.ticketMasterURL, "_blank")}>
			View On TicketMaster
			<Icon name="external square alternate" style={{ marginLeft: "0.3em" }}></Icon>
		</Button>
	)
}

ViewOnTicketMasterButton.propTypes = {
	mobile: PropTypes.bool,
	ticketMasterURL: PropTypes.string.isRequired,
}
