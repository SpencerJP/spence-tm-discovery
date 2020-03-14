import React from "react"
import PropTypes from "prop-types"
import { Card, Grid, Button, Icon } from "semantic-ui-react"

const removeNull = obj => {
	if (!obj) {
		return ""
	}
	return obj
}

const StyledDate = props => {
	let dateObj = new Date(props.children)
	return (
		<div style={{ textAlign: "right" }}>
			<div>{dateObj.getDate()}</div>
			<div style={{ fontSize: "1.2em", fontWeight: "bold", fontFamily: "Open Sans" }}>
				{dateObj.toLocaleString("default", { month: "short" })}
			</div>
		</div>
	)
}

StyledDate.propTypes = {
	children: PropTypes.string.isRequired,
}

/**
 * EventListItem shows a specific event in the list after retrieving a list of events from the API.
 * Should show:
 * Date
 * Location
 * Venue
 * Day of week
 * Time
 * Event Name
 * City
 * State
 * Button to view more
 *
 *
 */

/**
 *
 * @param {object} data event data from fetch
 * @param {boolean} mobile boolean, whether we are at a mobile resolution.
 */
export function EventListItem(data, mobile = false) {
	const { name, dates, _embedded } = data
	console.log(data)
	const formattedDate = removeNull(dates?.start?.localDate)
	const venue = _embedded?.venues[0]
	return (
		<Card style={{ width: mobile ? "100%" : "80%", marginBottom: "3em" }} centered>
			<Card.Content>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Card.Header textAlign="left" style={{ fontSize: "1.3em" }}>
								{name}
							</Card.Header>
							{venue && (
								<Card.Meta textAlign="left">
									{removeNull(venue.name)} - {removeNull(venue.city?.name)},{" "}
									{removeNull(venue.state?.stateCode)}
								</Card.Meta>
							)}
							<Card.Description></Card.Description>
						</Grid.Column>
						<Grid.Column>
							<StyledDate>{formattedDate}</StyledDate>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Card.Content>
			<Card.Content extra>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column></Grid.Column>
						<Grid.Column>
							<Button floated="right" color="blue">
								View On TicketMaster
								<Icon name="external square alternate" style={{ marginLeft: "0.3em" }}></Icon>
							</Button>
							<Button floated="right" color="blue">
								See More<Icon name="chevron right"></Icon>
							</Button>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Card.Content>
		</Card>
	)
}
