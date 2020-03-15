import React from "react"
import { Switch, Route } from "react-router-dom"
import { EventList } from "../EventsListComponents"
import { About } from "../AboutUs"

let prefix = window.REACT_APP_URL_PREFIX
if (prefix === "%REACT_APP_URL_PREFIX%") {
	prefix = ""
}

export function EventSiteRoutes() {
	return (
		<Switch>
			<Route exact path={`${prefix}/`}>
				<EventList />
			</Route>
			<Route exact path={`${prefix}/home`}>
				<EventList />
			</Route>
			<Route exact path={`${prefix}/about`}>
				<About />
			</Route>
		</Switch>
	)
}
