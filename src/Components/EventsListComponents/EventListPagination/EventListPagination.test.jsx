import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render, wait } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventListPagination } from "./EventListPagination"
import { setEventListData } from "../Redux/Actions"

// eslint-disable-next-line react/prop-types
const TestWrapper = ({ store, children }) => {
	return <Provider store={store}>{children}</Provider>
}

reducerManager.add("eventListReducer", EventListReducer)
describe("EventListPagination tests", () => {
	const initialState = {}
	let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
		mockStore = configureStore(initialState, getTestMiddleware())
		mockStore.dispatch(setEventListData(mockData.mockEventsJson))
	})
	it("renders pagination", () => {
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListPagination />
			</TestWrapper>
		)
		let pageCountElement = getByText(/Page 1/i) // should be located on the page
		expect(pageCountElement).toBeInTheDocument()
	})
	it("renders pagination and pagination works", async () => {
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListPagination />
			</TestWrapper>
		)
		const nextPageButton = getByText(/Next/i)
		expect(nextPageButton).toBeInTheDocument()
		nextPageButton.click() // go to next page

		await wait(() => {
			let pageCountElement = getByText(/Page 2/i)
			expect(pageCountElement).toBeInTheDocument() // check that the page number has changed
		}, 100)

		const previousPageButton = getByText(/Previous/i)
		expect(previousPageButton).toBeInTheDocument()
		previousPageButton.click() // go back a page

		await wait(() => {
			let pageCountElement = getByText(/Page 1/i)
			expect(pageCountElement).toBeInTheDocument() // check that the page number has changed back
		}, 100)
	})
})
