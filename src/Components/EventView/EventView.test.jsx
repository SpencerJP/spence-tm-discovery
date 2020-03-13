import React from "react"
import fetchMock from "fetch-mock"
import configureStore, { getTestMiddleware, reducerManager } from "../../../../Redux/Store"
import { render, wait,  } from "@testing-library/react"
import SingleEvent, {mockData} from "./Redux"
import {types as navbarTypes} from "../../Navbar"
import { Provider } from "react-redux"
import  { EventListItem } from "./EventListItem"

reducerManager.add("eventListReducer", EventListReducer)
describe("EventListItem tests", () => {
	const initialState = {}
    let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
	})
    it("renders the header at minimum", () => {
        const { getByText } = render(<Provider store={mockStore}><EventListItem eventData={mockData.mockEventsJson._embedded.events[0]} /></Provider>)
        const headerElement = getByText(/Charlotte Hornets vs. Los Angeles Lakers/i) // this must be in the header somewhere
        expect(headerElement).toBeInTheDocument()
    })
    
    it("renders a button that will take you to a \"close up view\" of this event", () => {
        const { getByText } = render(<Provider store={mockStore}><EventListItem eventData={mockData.mockEventsJson._embedded.events[0]} /></Provider>)
        const buttonElement = getByText(/See More/i) // this must be in the header somewhere
        expect(buttonElement).toBeInTheDocument()

        const expectedEventSelectAction = {
            type: "SELECTED_EVENT_DATA", // todo import this from relevant file
            payload: mockData.mockEventsJson._embedded.events[0]
        }
        const expectedNavbarSwitchAction = {
            type: navbarTypes.NAVBAR_SWITCH_TABS,
            payload: "eventview"
        }

        const storeActions = mockStore.getActions()
        expect(storeActions).toEqual([expectedEventSelectAction, expectedNavbarSwitchAction])
    })
    
})