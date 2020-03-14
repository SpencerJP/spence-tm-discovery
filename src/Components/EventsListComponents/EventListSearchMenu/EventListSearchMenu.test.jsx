import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventListSearchMenu } from "./EventListSearchMenu"

// eslint-disable-next-line react/prop-types
const TestWrapper = ({ store, children }) => {
	return <Provider store={store}>{children}</Provider>
}

reducerManager.add("eventListReducer", EventListReducer)
describe("EventListItem tests", () => {
	const initialState = {}
	let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
		mockStore = configureStore(initialState, getTestMiddleware())
	})
	it("renders pagination", () => {
		mockStore = configureStore(
			{
				eventListReducer: {
					eventListData: mockData.mockEventsJson,
				},
			},
			getTestMiddleware()
		)
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListSearchMenu />
			</TestWrapper>
		)
		let pageCountElement = getByText(/Page 1/i) // this must be in the header somewhere
		expect(pageCountElement).toBeInTheDocument()
	})
	it("renders pagination and pagination works", () => {
		mockStore = configureStore(
			{
				eventListReducer: {
					eventListData: mockData.mockEventsJson,
				},
			},
			getTestMiddleware()
		)
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListSearchMenu />
			</TestWrapper>
		)
		const nextPageButton = getByText(/Next/i)
		expect(nextPageButton).toBeInTheDocument()
		nextPageButton.click() // go to next page

		let pageCountElement = getByText(/Page 2/i)
		expect(pageCountElement).toBeInTheDocument() // check that the page number has changed

		const previousPageButton = getByText(/Previous/i)
		expect(previousPageButton).toBeInTheDocument()
		previousPageButton.click() // go back a page

		pageCountElement = getByText(/Page 1/i)
		expect(pageCountElement).toBeInTheDocument() // check that the page number has changed back
	})
})
