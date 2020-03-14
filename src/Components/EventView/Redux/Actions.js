// import { setupURLParamsTicketMaster } from "../../../Utilities/Requests/serializeToURLParams"
import { SELECTED_EVENT_DATA, EVENTVIEW_LOADING_STATUS } from "./Types"

export const urls = {
	// eventList: "/events.json",
}

export function setSelectedEventData(data) {
	return {
		type: SELECTED_EVENT_DATA,
		payload: data,
	}
}

export function setEventViewLoadingStatus(boolean) {
	return {
		type: EVENTVIEW_LOADING_STATUS,
		payload: boolean,
	}
}
