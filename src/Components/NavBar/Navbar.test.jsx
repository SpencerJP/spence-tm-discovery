import React from "react"
import configureStore, { getTestMiddleware, reducerManager } from "../../Store"
import { render, fireEvent, wait } from "@testing-library/react"
import { createMemoryHistory } from "history"
import { Provider } from "react-redux"
import { Navbar } from "./Navbar"
import { BrowserRouter } from "react-router-dom"

describe("Navbar tests", () => {
	const initialState = {}
	let mockStore = configureStore(initialState, getTestMiddleware())
	beforeEach(() => {
		mockStore = configureStore(initialState, getTestMiddleware())
	})
	it("renders the navbar and its buttons", () => {
		const { getByText } = render(
			<BrowserRouter>
				<Provider store={mockStore}>
					<Navbar />
				</Provider>
			</BrowserRouter>
		)
		const button1 = getByText(/Home/i)
		expect(button1).toBeInTheDocument()
		const button2 = getByText(/Event Lookup/i)
		expect(button2).toBeInTheDocument()
		const button3 = getByText(/About/i)
		expect(button3).toBeInTheDocument()
	})

	it("is responsive", () => {
		global.innerWidth = 250
		global.dispatchEvent(new Event("resize"))
		const { container } = render(
			<BrowserRouter>
				<Provider store={mockStore}>
					<Navbar />
				</Provider>
			</BrowserRouter>
		)

		let hamburgerButton = container.querySelector("i.sidebar")
		expect(hamburgerButton).toBeInTheDocument()
		global.innerWidth = 1920
		global.dispatchEvent(new Event("resize"))
		wait(() => {
			hamburgerButton = container.querySelector("i.sidebar")
			expect(hamburgerButton).not.toBeInTheDocument()
		}, 100)
	})
})
