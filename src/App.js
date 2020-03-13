import React from "react"
import { EventSiteRoutes } from "./Components/EventSiteRoutes"
import { Navbar } from "./Components/Navbar"
import "./App.css"
import "semantic-ui-css/semantic.min.css"
import { BrowserRouter } from "react-router-dom"

function App() {
	return (
		<BrowserRouter>
			<Navbar>
				<EventSiteRoutes></EventSiteRoutes>
			</Navbar>
		</BrowserRouter>
	)
}

export default App
