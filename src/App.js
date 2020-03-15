import React from "react"
import PropTypes from "prop-types"
import { EventSiteRoutes } from "./Components/EventSiteRoutes"
import { Navbar } from "./Components/Navbar"
import "semantic-ui-css/semantic.min.css"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import configureStore from "./Store"

const store = configureStore({})

function App(props) {
	return (
		<Provider store={props.storeProp || store}>
			<BrowserRouter>
				<Navbar>
					<EventSiteRoutes />
				</Navbar>
			</BrowserRouter>
		</Provider>
	)
}

App.propTypes = {
	storeProp: PropTypes.object, // just for testing, can insert a custom store
}

export default App
