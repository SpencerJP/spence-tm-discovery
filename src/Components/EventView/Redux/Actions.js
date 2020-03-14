import { setupURLParamsTicketMaster } from "../../../Utilities/Requests/serializeToURLParams"
import { SELECTED_EVENT_DATA, EVENTVIEW_LOADING_STATUS } from "./Types"

export const urls = {
	eventList: "/events.json",
}

export function fetchEventData(params) {
	const paramsString = setupURLParamsTicketMaster(params)
	const requestURL = `${window.REACT_APP_TICKETMASTER_API_URL}${urls.eventList}${paramsString}`
	return fetch(requestURL, SELECTED_EVENT_DATA)
}

export function setIsLoading(boolean) {
	return {
		type: EVENTVIEW_LOADING_STATUS,
		payload: boolean,
	}
}
