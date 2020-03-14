import React from "react"
import { Responsive, Segment } from "semantic-ui-react"
import { useSelector } from "react-redux"

export function EventView(props) {
	const selectedEventData = useSelector(state => state.singleEventReducer.selectedEventData)
	return (
		<Responsive
			as={Segment}
			minWidth={Responsive.onlyTablet.minWidth}
			style={{ width: "80%", backgroundColor: "#406a84" }}
		>
			{selectedEventData && JSON.stringify(selectedEventData)}
		</Responsive>
	)
}
/*
 *Event vals:
 *id
 *name
 *type
 *locate
 *url
 *sales
 *dates
 *price range
 *attractions
 *please note
 *extensions
 *source
 *promoter
 *images ->
 *      {
 *          ratio
 * url
 * height
 * width
 * fallback
 *      }
 *venue
 *info
 *classifications
 *field
 *
 */
