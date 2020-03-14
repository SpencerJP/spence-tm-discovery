import React from "react"
import fetchMock from "fetch-mock"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Store"
import { render, wait } from "@testing-library/react"
import EventListReducer, { mockData } from "../Redux"
import { Provider } from "react-redux"
import { EventList } from "./EventList"
import { BrowserRouter } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const TestWrapper = ({ store, children }) => {
	return (
		<BrowserRouter>
			<Provider store={store}>{children}</Provider>
		</BrowserRouter>
	)
}

const mockEventsFetch = time => {
	fetchMock.get(/events/i, JSON.stringify(mockData.mockEventsJson), {
		delay: time || 1000,
	})
	fetchMock.get(/ipregistry/i, JSON.stringify(mockData.mockIPLookup), {
		delay: 200,
	})
}

reducerManager.add("eventListReducer", EventListReducer)
describe("EventList tests", () => {
	const initialState = {}
	let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
		mockStore = configureStore(initialState, getTestMiddleware())
	})
	afterEach(() => {
		fetchMock.reset()
	})
	it("calls fetch on mount", () => {
		mockEventsFetch(300)
		render(
			<TestWrapper store={mockStore}>
				<EventList />
			</TestWrapper>
		)
		wait(() => {
			const storeState = mockStore.getState()
			expect(storeState.eventListReducer.stepQueryData).toEqual(mockData.mockEventsJson)
		}, 1500)
	})
	it("fetches and renders at least one event", () => {
		mockEventsFetch()
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventList />
			</TestWrapper>
		)
		wait(() => {
			const eventElement = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i)
			expect(eventElement).toBeInTheDocument()
		}, 1500)
	})

	it("displays loader because it is waiting for fetch", () => {
		mockEventsFetch(1501)
		const { getByText } = render(
			<TestWrapper store={mockStore}>
				<EventList />
			</TestWrapper>
		)
		wait(() => {
			const loadingElement = getByText(/Loading/i)
			expect(loadingElement).toBeInTheDocument()
		}, 1500)
	})

	it("calls fetch on mount, then displays a list of events, specifically their header", async () => {
		mockEventsFetch()
		const { getAllByText } = render(
			<TestWrapper store={mockStore}>
				<EventList />
			</TestWrapper>
		)

		await wait(
			() => {
				const headerElements1 = getAllByText(/Charlotte Hornets vs. Los Angeles Lakers/i) // Event name from mock data
				expect(headerElements1.length).not.toEqual(0)
				const headerElements2 = getAllByText(/Eagles/i) // Event name from mock data
				expect(headerElements2.length).not.toEqual(0)
			},
			{ timeout: 1500 }
		)
	})
})
