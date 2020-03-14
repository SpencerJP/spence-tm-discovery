import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Grid, Responsive, Segment, Dimmer, Loader, Image } from "semantic-ui-react"
import { EventListItem } from "../EventListItem"
import { fetchEventList } from "../Redux/Actions"
import { useOnMountFetch } from "../../../Utilities/Hooks/useOnMountFetch"
import { useWindowSize } from "../../../Utilities/Hooks/useWindowSize"
import { EventListSearchMenu } from "../EventListSearchMenu/EventListSearchMenu"

function BigLoader() {
	const { height } = useWindowSize()
	return (
		<Segment style={{ height: height, marginTop: "5em" }}>
			<Dimmer active inverted>
				<Loader size="large">Loading</Loader>
			</Dimmer>

			<Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
		</Segment>
	)
}

/**
 * Show a list of events on the page. Should be controlled by a nav portion at the top of the screen.
 */
export function EventList() {
	const dispatch = useDispatch()
	const events = useSelector(state => state.eventListReducer.eventListData)
	const isLoading = useSelector(state => state.eventListReducer.isLoading)
	useOnMountFetch(dispatch, { action: fetchEventList, args: [{ sort: "random" }, true] })

	if (isLoading) {
		return <BigLoader />
	}
	return (
		<Grid>
			<EventListSearchMenu />
			<Grid.Row centered>
				<Responsive
					as={Segment}
					maxWidth={Responsive.onlyTablet.minWidth - 1}
					style={{ width: "100%", backgroundColor: "rgb(41, 173, 255)" }}
				>
					<Grid.Column width={16}>
						<FallbackWrapper events={events?._embedded?.events} mobile={true} />
					</Grid.Column>
				</Responsive>
				<Responsive
					as={Segment}
					minWidth={Responsive.onlyTablet.minWidth}
					style={{ width: "80%", backgroundColor: "#406a84" }}
				>
					<Grid.Column width={10}>
						<FallbackWrapper events={events?._embedded?.events} mobile={false} />
					</Grid.Column>
				</Responsive>
			</Grid.Row>
		</Grid>
	)
}

/**
 * Fallback for if there is no events.
 */
const FallbackWrapper = ({ events, mobile }) => {
	if (!events || !events.length) {
		return <h2>No events found!</h2>
	}

	return events.map(element => {
		if (!element) {
			throw new Error("Event isn't valid.")
		}
		return <EventListItem key={element.id} data={element} mobile={mobile} />
	})
}
