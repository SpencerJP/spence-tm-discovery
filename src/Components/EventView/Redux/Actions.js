import { GETRequest, setupURLParams } from "../../../Utilities/Requests/HTTPRequests"
import { SELECTED_EVENT_DATA, EVENTVIEW_LOADING_STATUS } from "./Types"

export const urls = {
	eventList: "/events.json",
}

export function fetchEventData(params) {
	const paramsString = setupURLParams(params)
	const requestURL = `${window.TICKETMASTER_API_URL}${urls.eventList}${paramsString}`
	return GETRequest(requestURL, SELECTED_EVENT_DATA)
}

export function setIsLoading(boolean) {
	return {
		type: EVENTVIEW_LOADING_STATUS,
		payload: boolean,
	}
}
