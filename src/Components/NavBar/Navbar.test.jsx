import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../../Redux/Store"
import { render } from "@testing-library/react"
import NavbarReducer, {mockData, types} from "./Redux"
import { Provider } from "react-redux"
import { Navbar } from "./Navbar"

reducerManager.add("navbarReducer", NavbarReducer)
describe("Navbar tests", () => {
	const initialState = {}
    let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
        mockStore = configureStore(initialState, getTestMiddleware())
	})
    it("renders the navbar and its buttons", () => {
        const { getByText } = render(<Provider store={mockStore}><Navbar /></Provider>)
        const button1 = getByText(/Home/i)
        expect(button1).toBeInTheDocument()
        const button2 = getByText(/Event Lookup/i)
        expect(button2).toBeInTheDocument()
        const button3 = getByText(/About Us/i)
        expect(button3).toBeInTheDocument()
    })

    
    it("is responsive", () => {
        global.innerWidth = 250
        const { container } = render(<Provider store={mockStore}><Navbar /></Provider>)

        const hamburgerButton = container.querySelector(".sidebar.icon")
        expect(hamburgerButton).toBeInTheDocument()
        
        global.innerWidth = 1920
        const hamburgerButton = container.querySelector(".sidebar.icon")
        expect(hamburgerButton).not.toBeInTheDocument()



    })
    
    it("Allows you to switch between tabs", () => {
        const { getByText } = render(<Provider store={mockStore}><Navbar /></Provider>)
        const button1 = getByText(/Home/i)
        button1.click()

        
        const expectedNavbarSwitchActionHome = {
            type: types.NAVBAR_SWITCH_TABS,
            payload: "home"
        }

        
        const button2 = getByText(/Event Lookup/i)
        button2.click()

        
        const expectedNavbarSwitchActionEventLookup = {
            type: types.NAVBAR_SWITCH_TABS,
            payload: "eventlookup"
        }
        
        const button3 = getByText(/About Us/i)
        button3.click()

        
        const expectedNavbarSwitchActionAbout = {
            type: types.NAVBAR_SWITCH_TABS,
            payload: "about"
        }
        
        const storeActions = mockStore.getActions()
        expect(storeActions).toEqual([expectedNavbarSwitchActionHome, expectedNavbarSwitchActionEventLookup, expectedNavbarSwitchActionAbout])
    })
    
})