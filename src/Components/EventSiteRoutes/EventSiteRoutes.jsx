import React from "react"
import { Switch, Route } from "react-router-dom"
import { EventList } from "../EventsListComponents"
import { About } from "../AboutUs"

export function EventSiteRoutes() {
	return (
		<Switch>
			<Route exact path={`/`}>
				<EventList />
			</Route>
			<Route exact path={`/home`}>
				<EventList />
			</Route>
			<Route exact path={`/about`}>
				<About />
			</Route>
		</Switch>
	)
}
