import React from "react"
import { EventSiteRoutes } from "./Components/EventSiteRoutes"
import { Navbar } from "./Components/Navbar"
import "semantic-ui-css/semantic.min.css"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "./Store"

const store = configureStore({})

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Navbar>
					<EventSiteRoutes />
				</Navbar>
			</BrowserRouter>
		</Provider>
	)
}

export default App
