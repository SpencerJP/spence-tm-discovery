import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Grid, Responsive, Segment } from "semantic-ui-react"
import { EventListItem } from "../EventListItem"
import { fetchEventList } from "../Redux/Actions"
import { useOnMountFetch } from "../../../Utilities/Hooks/useOnMountFetch"

export function EventList() {
	const dispatch = useDispatch()
	const events = useSelector(state => state.eventListReducer.eventListData)
	const isLoading = useSelector(state => state.eventListReducer.isLoading)
	useOnMountFetch(dispatch, { action: fetchEventList, args: [{}, true] })
	return (
		<Grid>
			<Grid.Row centered>
				<Responsive as={Segment} {...Responsive.onlyMobile} style={{ width: "100%" }}>
					<Grid.Column width={16}>
						{events?._embedded.events.map(element => (
							<EventListItem key={element.id} {...element} mobile={true} />
						))}
					</Grid.Column>
				</Responsive>
				<Responsive as={Segment} minWidth={Responsive.onlyTablet.minWidth} style={{ width: "80%" }}>
					<Grid.Column width={10}>
						{events?._embedded?.events.map(element => (
							<EventListItem key={element.id} {...element} mobile={false} />
						))}
					</Grid.Column>
				</Responsive>
			</Grid.Row>
		</Grid>
	)
}
