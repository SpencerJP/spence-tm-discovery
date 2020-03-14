import React from "react"
import PropTypes from "prop-types"
import { Card, Grid, Button, Icon, Image } from "semantic-ui-react"
import { StyledEventDate } from "./StyledEventDate"
import { StyledSaleDate } from "./StyledSaleDate"
import { LimitedTextBox } from "./LimitedTextBox"

const removeNull = obj => {
	if (!obj) {
		return ""
	}
	return obj
}

const getBestImageURL = images => {
	let currentBestImage = images?.[0]
	images.forEach(imageData => {
		if (imageData.ratio === "16_9") {
			currentBestImage = imageData
			return
		}
	})
	return currentBestImage?.url
}

/**
 *
 * @param {object} data event data from fetch
 * @param {boolean} mobile boolean, whether we are at a mobile resolution.
 */
export function EventListItem(props) {
	const { name, dates, _embedded, images, info, url, sales } = props.data
	console.log(props.data)
	const formattedDate = removeNull(dates?.start?.localDate)
	const venue = _embedded?.venues[0]
	const placeholderImageSrc = getBestImageURL(images)
	let description = info
	if (!description) {
		description = "No description found for this event."
	}
	const dayAndTimeString = "Friday 7.00pm"
	const ticketMasterURL = url
	let styledSaleDate = null
	if (sales?.public?.startDateTime) {
		styledSaleDate = (
			<StyledSaleDate from={sales.public.startDateTime} to={sales.public.endDateTime} mobile={props.mobile} />
		)
	}

	return (
		<Card style={{ width: "100%", marginBottom: "3em" }} centered>
			<Card.Content>
				<Grid>
					<Grid.Row columns={2}>
						<Grid.Column>
							<Card.Header textAlign="left" style={{ fontSize: "1.3em" }}>
								{name}
							</Card.Header>
							<Card.Header textAlign="left" style={{ fontSize: "1.15em" }}>
								{dayAndTimeString}
							</Card.Header>
							{venue && (
								<Card.Meta textAlign="left">
									{removeNull(venue.name)} - {removeNull(venue.city?.name)},{" "}
									{removeNull(venue.state?.stateCode)}
								</Card.Meta>
							)}
							{/* <Card.Description></Card.Description> */}
						</Grid.Column>
						<Grid.Column>
							<StyledEventDate>{formattedDate}</StyledEventDate>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Card.Content>
			<Card.Content extra>
				<Grid>
					<Grid.Row>
						{/* let's save some mobile data and skip loading images! */}
						{!props.mobile && (
							<Grid.Column width={props.mobile ? 16 : 8}>
								{placeholderImageSrc && <Image src={placeholderImageSrc} size="medium" />}
							</Grid.Column>
						)}
						<Grid.Column width={props.mobile ? 16 : 8} style={{ color: "#000000", textAlign: "left" }}>
							<LimitedTextBox mobile={props.mobile}>{description}</LimitedTextBox>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column width={props.mobile ? 16 : 5}>{styledSaleDate}</Grid.Column>
						<Grid.Column width={props.mobile ? 16 : 11}>
							<Button floated="right" color="blue" compact={props.mobile}>
								{!props.mobile && "See More"}
								<Icon name="chevron right" style={props.mobile ? { marginRight: "0.3em" } : {}}></Icon>
							</Button>
							{!props.mobile && (
								<Button floated="right" color="blue" onClick={() => window.open(ticketMasterURL, "_blank")}>
									View On TicketMaster
									<Icon name="external square alternate" style={{ marginLeft: "0.3em" }}></Icon>
								</Button>
							)}
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Card.Content>
		</Card>
	)
}

EventListItem.propTypes = {
	data: PropTypes.object.isRequired,
	mobile: PropTypes.bool,
}
