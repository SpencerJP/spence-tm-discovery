import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { Segment, Form, Input, Select, Button, Accordion, Icon } from "semantic-ui-react"
import { countryOptions } from "./countryOptions"
import { useSelector, useDispatch } from "react-redux"
import { updateSingleParamActiveUrl, fetchEventList } from "../Redux/Actions"

const onChangeFactory = setter => {
	return e => {
		setter(e.target.value)
	}
}

const onClickHandler = (dispatch, countryCode, keywordSearch) => {
	if (countryCode && countryCode !== "") {
		dispatch(updateSingleParamActiveUrl({ countryCode: countryCode }))
	}
	if (keywordSearch && keywordSearch !== "") {
		dispatch(updateSingleParamActiveUrl({ keywordSearch: keywordSearch }))
	}

	dispatch(fetchEventList())
}

export function EventListSearchMenu() {
	const dispatch = useDispatch()
	const userLocationData = useSelector(state => state.eventListReducer.userLocation)
	const activeUrlParams = useSelector(state => state.eventListReducer.activeUrlParams)
	const isLoading = useSelector(state => state.eventListReducer.activeUrlParams)
	const [countryCode, setCountryCode] = useState(userLocationData?.location?.country?.code)
	const [keywordSearch, setKeywordSearch] = useState(activeUrlParams.keywordSearch || "")
	const [accordionActive, setAccordionActive] = useState(false)

	// if user IP location is updated, update dropdown
	useEffect(() => {
		setCountryCode(userLocationData?.location?.country?.code)
	}, [userLocationData])
	// update keyword input with keywords in store
	useEffect(() => {
		setKeywordSearch(activeUrlParams.keywordSearch)
	}, [activeUrlParams])

	return (
		<Segment fluid style={{ top: "0", backgroundColor: "#c0dffff4", width: "100%" }}>
			<Accordion>
				<Accordion.Title active={accordionActive} onClick={() => setAccordionActive(!accordionActive)}>
					<Icon name="dropdown" />
					Search Options
				</Accordion.Title>
				<Accordion.Content active={accordionActive}>
					<Form loading={isLoading}>
						<Form.Group widths="equal">
							<Form.Field
								id="form-input-control-keyword"
								control={Input}
								label="Keyword"
								placeholder="Search by Artist, Event or Venue"
								value={keywordSearch}
								onChange={onChangeFactory(setKeywordSearch)}
							/>
							<Form.Field
								control={Select}
								options={countryOptions}
								label={{ children: "Country", htmlFor: "form-select-control-country" }}
								value={countryCode}
								onChange={onChangeFactory(setCountryCode)}
								search
								searchInput={{ id: "form-select-control-country" }}
							/>
						</Form.Group>
						<Form.Field
							id="form-button-control-save-and-search"
							control={Button}
							content="Search"
							color="blue"
							floated="right"
							onClick={onClickHandler(dispatch, countryCode, keywordSearch)}
						/>
					</Form>
				</Accordion.Content>
			</Accordion>
		</Segment>
	)
}
