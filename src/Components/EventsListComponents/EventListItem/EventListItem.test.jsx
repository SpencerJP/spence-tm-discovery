import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventListItem } from "./EventListItem"
import { MemoryRouter, Route } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const TestWrapper = ({ store, children }) => {
	return (
		<MemoryRouter initialEntries={["/"]}>
			<Provider store={store}>{children}</Provider>
		</MemoryRouter>
	)
}

reducerManager.add("eventListReducer", EventListReducer)
describe("EventListItem tests", () => {
	const initialState = {}
	let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
		mockStore = configureStore(initialState, getTestMiddleware())
	})
	it("renders the header at minimum", () => {
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListItem
					key={mockData.mockEventsJson._embedded.events[0].id}
					data={mockData.mockEventsJson._embedded.events[0]}
					mobile={false}
				/>
			</TestWrapper>
		)
		const headerElement = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i) // this must be in the header somewhere
		expect(headerElement).toBeInTheDocument()
	})

	it('renders a button that will take you to a "close up view" of this event', () => {
		let locationTest
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListItem
					key={mockData.mockEventsJson._embedded.events[0].id}
					data={mockData.mockEventsJson._embedded.events[0]}
					mobile={false}
				/>
				<Route
					path="*"
					render={({ location }) => {
						locationTest = location
						return null
					}}
				/>
			</TestWrapper>
		)
		const buttonElement = getByText(/See More/i) // button should be present
		expect(buttonElement).toBeInTheDocument()

		const expectedEventSelectAction = {
			type: "SELECTED_EVENT_DATA", // todo import this from relevant file
			payload: mockData.mockEventsJson._embedded.events[0],
		}

		expect(locationTest.pathname).toMatch(/eventview/)

		const storeActions = mockStore.getActions()
		expect(storeActions).toEqual([expectedEventSelectAction])
	})
})
