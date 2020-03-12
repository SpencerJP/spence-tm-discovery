import React from "react"
import fetchMock from "fetch-mock"
import configureStore, { getTestMiddleware, reducerManager } from "../../../../Redux/Store"
import { render, wait, fireEvent } from "@testing-library/react"
import EventListReducer, {mockData, types} from "../Redux"
import { Provider } from "react-redux"
import  { ListComponent } from "./ListComponent"

reducerManager.add("eventListReducer", EventListReducer)
describe("ListComponent tests", () => {
	const initialState = {}
    let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
	})
    it("renders", () => {
        const { getByText } = render(<Provider store={mockStore}><ListComponent /></Provider>)
        const linkElement = getByText(/Search/i)
        expect(linkElement).toBeInTheDocument()
    })

    it("searches on click", async () => {
            fetchMock.get(/events/i, JSON.stringify(mockData.mockEventsJson), {
                delay: 1000,
            })
            const { getByText, getByPlaceholderText } = render(<Provider store={mockStore}><ListComponent /></Provider>)

            await wait(() =>  { 
                const storeState = mockStore.getState()
                expect(storeState.eventListReducer.stepQueryData).toEqual(mockData.mockEventsJson)
            }, {timeout: 1500})
            fetchMock.reset()

    })

    it("does not search on incorrect input and click", async () => {
        fetchMock.get(/events/i, JSON.stringify(mockData.mockEventsJson), {
            delay: 1000,
        })
        const { getByText, getByPlaceholderText } = render(<Provider store={mockStore}><SearchBox /></Provider>)
        const inputField = getByPlaceholderText(/Order ID.../i)
        fireEvent.change(inputField, {target: { value: "invalid!!!!" } } ) // type this into input
        getByText(/Search/i).click() // begin search

        await wait(() =>  { 
            const storeState = mockStore.getState()
            expect(storeState.remediationReducer.stepQueryData).toEqual([])
        }, {timeout: 1500})
        fetchMock.reset()

})
    
})