import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../../Redux/Store"
import { render, wait } from "@testing-library/react"
import SingleEventReducer, {mockData} from "./Redux"
import { Provider } from "react-redux"

reducerManager.add("eventListReducer", EventListReducer)
describe("EventListItem tests", () => {
	const initialState = {}
    let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
	})
    it("renders the header at minimum", () => {
        const { getByText } = render(<Provider store={mockStore}><EventView eventData={mockData.mockEventsJson._embedded.events[0]} /></Provider>)
        const headerElement = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i) // this must be in the header somewhere
        expect(headerElement).toBeInTheDocument()
    })
    
})