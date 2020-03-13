import React from "react"
import { Switch, Route } from "react-router-dom"
import { EventList } from "../EventsListComponents"
import { About } from "../AboutUs"
import { EventView } from "../EventView"

export function EventSiteRoutes(props) {
	return (
		<Switch>
			<Route path="/">
				<EventList />
			</Route>
			<Route path="/home">
				<EventList />
			</Route>
			<Route path="/viewevent">
				<EventView />
			</Route>
			<Route path="/about">
				<About />
			</Route>
		</Switch>
	)
}