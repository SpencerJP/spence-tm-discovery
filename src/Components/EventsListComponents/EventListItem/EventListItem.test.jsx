import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventListItem } from "./EventListItem"
import { MemoryRouter } from "react-router-dom"

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
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListItem
					key={mockData.mockEventsJson._embedded.events[0].id}
					data={mockData.mockEventsJson._embedded.events[0]}
					mobile={false}
				/>
			</TestWrapper>
		)
		const buttonElement = getByText(/View On TicketMaster/i) // button should be present
		expect(buttonElement).toBeInTheDocument()
	})
})
