import React from "react"
import fetchMock from "fetch-mock"
import configureStore, { getTestMiddleware, reducerManager } from "../../../../Redux/Store"
import { render, wait } from "@testing-library/react"
import EventListReducer, {mockData} from "../Redux"
import { Provider } from "react-redux"
import  { EventList } from "./EventList"

reducerManager.add("eventListReducer", EventListReducer)
describe("EventList tests", () => {
	const initialState = {}
    let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
	})
    it("renders", () => {
        const { getByText } = render(<Provider store={mockStore}><EventList /></Provider>)
        const linkElement = getByText(/Events/i)
        expect(linkElement).toBeInTheDocument()
    })
    it("calls fetch on mount", () => {
        fetchMock.get(/events/i, JSON.stringify(mockData.mockEventsJson), {
            delay: 1000,
        })

        render(<Provider store={mockStore}><EventList /></Provider>)
        wait(() => {
            const storeState = mockStore.getState()
            expect(storeState.eventListReducer.stepQueryData).toEqual(mockData.mockEventsJson)
        }, 1500)
    })

    it("calls fetch on mount, then displays a list of events, specifically their header", async () => {
            
            const { getByText, getByPlaceholderText } = render(<Provider store={mockStore}><EventList /></Provider>)

            await wait(() =>  { 
                const headerElement1 = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i); // Event name from mock data
                expect(headerElement1).toBeInTheDocument();
                const headerElement2 = getByText(/Eagles/i); // Event name from mock data
                expect(headerElement2).toBeInTheDocument();
            }, {timeout: 1500})
            fetchMock.reset()

    })
    
})