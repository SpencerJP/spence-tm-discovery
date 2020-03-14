import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { Segment, Form, Input, Select, TextArea, Button, Accordion, Icon } from "semantic-ui-react"
import { countryOptions } from "./countryOptions"
import { useSelector } from "react-redux"

export function EventListSearchMenu() {
	const userLocationData = useSelector(state => state.eventListReducer.userLocation)
	const [countryCode, setCountryCode] = useState(userLocationData?.location?.country?.code)
	useEffect(() => {
		setCountryCode(userLocationData?.location?.country?.code)
	}, [userLocationData])
	const [accordionActive, setAccordionActive] = useState(false)
	return (
		<Segment fluid style={{ top: "0", backgroundColor: "#c0dffff4", width: "100%" }}>
			<Accordion>
				<Accordion.Title active={accordionActive} onClick={() => setAccordionActive(!accordionActive)}>
					<Icon name="dropdown" />
					Search Options
				</Accordion.Title>
				<Accordion.Content active={accordionActive}>
					<Form>
						<Form.Group widths="equal">
							<Form.Field
								id="form-input-control-first-name"
								control={Input}
								label="First name"
								placeholder="First name"
							/>
							<Form.Field
								control={Select}
								options={countryOptions}
								label={{ children: "Country", htmlFor: "form-select-control-country" }}
								value={countryCode}
								onChange={e => setCountryCode(e.target.value)}
								search
								searchInput={{ id: "form-select-control-country" }}
							/>
						</Form.Group>
						<Form.Field
							id="form-textarea-control-opinion"
							control={TextArea}
							label="Opinion"
							placeholder="Opinion"
						/>
						<Form.Field
							id="form-input-control-error-email"
							control={Input}
							label="Email"
							placeholder="joe@schmoe.com"
							error={{
								content: "Please enter a valid email address",
								pointing: "below",
							}}
						/>
						<Form.Field
							id="form-button-control-public"
							control={Button}
							content="Confirm"
							label="Label with htmlFor"
						/>
					</Form>
				</Accordion.Content>
			</Accordion>
		</Segment>
	)
}
