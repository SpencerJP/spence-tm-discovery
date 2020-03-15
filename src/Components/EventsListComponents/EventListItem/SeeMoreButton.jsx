import React from "react"
import PropTypes from "prop-types"
import { Icon, Button } from "semantic-ui-react"
import { useDispatch } from "react-redux"
import { setSelectedEventData } from "../../EventView/Redux/Actions"
import { useHistory } from "react-router-dom"

const seeMoreHandler = (dispatch, history, eventData) => {
	dispatch(setSelectedEventData(eventData))
	history.push("eventview")
}

/**
 * Click to load a bigger view of this event.
 */
export function SeeMoreButton({ mobile, eventData }) {
	const dispatch = useDispatch()
	const history = useHistory()
	return (
		<Button
			floated="right"
			color="blue"
			compact={mobile}
			onClick={() => seeMoreHandler(dispatch, history, eventData)}
		>
			{!mobile && "See More"}
			<Icon name="chevron right" style={mobile ? { marginRight: "0.3em" } : {}}></Icon>
		</Button>
	)
}

SeeMoreButton.propTypes = {
	mobile: PropTypes.bool,
	eventData: PropTypes.object,
}
