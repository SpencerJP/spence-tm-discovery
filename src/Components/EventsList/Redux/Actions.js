import { GETRequest } from "../../../Redux/Actions/HttpRequests"
import { GET_EVENTLIST_DATA, EVENTLIST_LOADING_STATUS } from "./Types"
import serialize from "../../../../Utilities/Requests/serializeToURLParams"

export const urls = {
	eventList: "/events.json",
}

export function fetchEventList(params) {
	let paramsString = ""
	if (params) {
		paramsString = serialize(params)
	}
	const requestURL = `${window.TICKETMASTER_API_URL}${urls.eventList}${paramsString}`
	return GETRequest(requestURL, GET_EVENTLIST_DATA)
}

export function setIsLoading(boolean) {
	return {
		type: STEPQUERY_LOADING_STATUS,
		payload: boolean,
	}
}
