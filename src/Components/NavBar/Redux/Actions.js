import { GETRequest, setupURLParams } from "../../../Redux/Actions/HttpRequests"
import { GET_EVENTLIST_DATA, EVENTLIST_LOADING_STATUS, SET_EVENTSLIST_NUMBER_OF_PAGES } from "./Types"

export const urls = {
	eventList: "/events.json?",
}

export function fetchEventList(params) {
	const paramsString = setupURLParams(params)
	const requestURL = `${environmentvars.TICKETMASTER_API_URL}${urls.eventList}${paramsString}`
	return GETRequest(requestURL, GET_EVENTLIST_DATA)
}

export function setIsLoading(boolean) {
	return {
		type: EVENTLIST_LOADING_STATUS,
		payload: boolean,
	}
}

export function setNumberOfPages(number) {
	return {
		type: SET_EVENTSLIST_NUMBER_OF_PAGES,
		payload: number,
	}
}
