import React from "react"
import { Switch, Route, useLocation } from "react-router-dom"
import { EventList } from "../EventsListComponents"
import { About } from "../AboutUs"
import { EventView } from "../EventView"

export function EventSiteRoutes(props) {
	return (
		<Switch>
			<Route exact path="/">
				<EventList />
			</Route>
			<Route exact path="/home">
				<EventList />
			</Route>
			<Route exact path="/viewevent">
				<EventView />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
		</Switch>
	)
}
