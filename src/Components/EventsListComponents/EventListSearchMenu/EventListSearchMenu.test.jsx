import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render, wait, fireEvent } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventListSearchMenu } from "./EventListSearchMenu"
import { setEventListData } from "../Redux/Actions"

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
		mockStore.dispatch(setEventListData(mockData.mockEventsJson))
	})
	it("renders search options", () => {
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListSearchMenu />
			</TestWrapper>
		)
		let searchOptionsButton = getByText(/Click for Search Options/i) // should be located on the page
		expect(searchOptionsButton).toBeInTheDocument()
	})

	it("opens as an accordion to contain more options", async () => {
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListSearchMenu />
			</TestWrapper>
		)
		let searchOptionsButton = getByText(/Click for Search Options/i) // should be located on the page
		searchOptionsButton.click()

		await wait(() => {}, 100)

		let keywordLabel = getByText(/Search by Artist, Event or Venue/i) // should be located on the page
		expect(keywordLabel).toBeInTheDocument()

		let countrySelectLabel = getByText(/Country/i) // should be located on the page
		expect(countrySelectLabel).toBeInTheDocument()
	})

	it("allows activeUrlParams to be updated", async () => {
		const { getAllByText, getByPlaceholderText, getByText } = render(
			<TestWrapper store={mockStore}>
				<EventListSearchMenu />
			</TestWrapper>
		)
		let searchOptionsButton = getByText(/Click for Search Options/i)
		searchOptionsButton.click()

		await wait(() => {}, 100)

		let keywordInput = getByPlaceholderText(/Search by Artist, Event or Venue/i)
		fireEvent.change(keywordInput, {
			target: {
				value: "jesttest",
			},
		}) // change text field

		let countrySelect = getAllByText(/United States/i)[0] // select US as the country
		countrySelect.click()

		let sortSelect = getByText(/Random/i) // select random as the sort method
		sortSelect.click()

		let searchButton = getByText("Search")
		searchButton.click()

		let storeState = mockStore.getState()
		let expectedParams = {
			apikey: undefined, // because .env vars not present
			countryCode: "US",
			keyword: "jesttest",
			sort: "random",
		}
		expect(storeState.eventListReducer.activeUrlParams).toEqual(expectedParams)
	})
})
