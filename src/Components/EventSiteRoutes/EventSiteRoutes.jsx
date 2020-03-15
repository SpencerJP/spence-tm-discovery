import React from "react"
import { Switch, Route } from "react-router-dom"
import { EventList } from "../EventsListComponents"
import { About } from "../AboutUs"

export function EventSiteRoutes() {
	return (
		<Switch>
			<Route exact path={`${window.REACT_APP_URL_SUFFIX}/`}>
				<EventList />
			</Route>
			<Route exact path={`${window.REACT_APP_URL_SUFFIX}/home`}>
				<EventList />
			</Route>
			<Route exact path={`${window.REACT_APP_URL_SUFFIX}/about`}>
				<About />
			</Route>
		</Switch>
	)
}
