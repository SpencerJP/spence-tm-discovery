import React, { useState, useEffect } from "react"
// import PropTypes from "prop-types"
import { Segment, Form, Input, Button, Accordion, Icon, Dropdown } from "semantic-ui-react"
import { countryOptions } from "./countryOptions"
import { useSelector, useDispatch } from "react-redux"
import { updateActiveUrlParams, fetchEventList } from "../Redux/Actions"
import { sortOptions } from "./sortOptions"

const onClickHandler = (dispatch, countryCode, keywordSearch, sortType) => {
	dispatch(updateActiveUrlParams({ countryCode: countryCode }))
	dispatch(updateActiveUrlParams({ keyword: keywordSearch }))
	dispatch(updateActiveUrlParams({ sort: sortType }))
	dispatch(updateActiveUrlParams({ page: 0 }))

	dispatch(fetchEventList())
}

export function EventListSearchMenu() {
	const dispatch = useDispatch()
	const userLocationData = useSelector(state => state.eventListReducer.userLocation)
	const activeUrlParams = useSelector(state => state.eventListReducer.activeUrlParams)
	const isLoading = useSelector(state => state.eventListReducer.isLoading)

	const [countryCode, setCountryCode] = useState("All")
	const [sortType, setSortType] = useState("name,asc")
	const [keywordSearch, setKeywordSearch] = useState("")
	const [accordionActive, setAccordionActive] = useState(false)

	// if user IP location is updated, update dropdown
	useEffect(() => {
		if (userLocationData?.location?.country?.code) {
			setCountryCode(userLocationData?.location?.country?.code)
		}
	}, [userLocationData])
	// update keyword input with keywords in store
	useEffect(() => {
		if (activeUrlParams.keyword) {
			setKeywordSearch(activeUrlParams.keyword)
		} else {
			setKeywordSearch("")
		}
	}, [activeUrlParams])

	return (
		<Segment style={{ marginTop: "4.4em", backgroundColor: "#c0dffff4", width: "100%" }}>
			<Accordion>
				<Accordion.Title active={accordionActive} onClick={() => setAccordionActive(!accordionActive)}>
					<Icon name="dropdown" />
					Click for Search Options
				</Accordion.Title>
				<Accordion.Content active={accordionActive}>
					<Form>
						<Form.Group widths="equal">
							<Form.Field
								control={Input}
								label="Search by Artist, Event or Venue"
								placeholder="Search by Artist, Event or Venue"
								value={keywordSearch}
								onChange={(e, { value }) => {
									setKeywordSearch(value)
								}}
							/>
							<Form.Field
								control={Dropdown}
								selection
								search
								options={countryOptions}
								label={{ children: "Country" }}
								value={countryCode}
								onChange={(e, { value }) => {
									setCountryCode(value)
								}}
							/>
						</Form.Group>

						<Form.Group widths="equal">
							<Form.Field
								control={Dropdown}
								selection
								options={sortOptions}
								label={{ children: "Sort By" }}
								value={sortType}
								onChange={(e, { value }) => {
									setSortType(value)
								}}
							/>
							<Form.Field
								id="form-button-control-save-and-search"
								control={Button}
								style={{ marginTop: "1.7em" }}
								content="Search"
								color="blue"
								floated="right"
								loading={isLoading}
								onClick={() => onClickHandler(dispatch, countryCode, keywordSearch, sortType)}
							/>
						</Form.Group>
					</Form>
				</Accordion.Content>
			</Accordion>
		</Segment>
	)
}
