import { setupURLParamsTicketMaster, serialize } from "../../../Utilities/Requests/serializeToURLParams"
import {
	SET_EVENTLIST_DATA,
	EVENTLIST_LOADING_STATUS,
	SET_EVENTLIST_NUMBER_OF_PAGES,
	SET_USER_LOCATION,
} from "./Types"

export const urls = {
	eventList: "/events.json",
	userLocationService: "https://api.ipregistry.co/",
}

const insertCountryCode = async (dispatch, params) => {
	if (!params) {
		params = {}
	}
	if (!params?.countryCode) {
		// no country found in parameters, let's check the user's country
		let country = await dispatch(fetchUserLocation())
		if (country) {
			params.countryCode = country
		}
	}
	return params
}

export function fetchEventList(params, initial) {
	return async function(dispatch) {
		dispatch(setIsLoading(true))

		if (initial) {
			params = await insertCountryCode(dispatch, params)
		}

		const paramsString = setupURLParamsTicketMaster(params) // convert params into an URL string
		const requestURL = `${window.REACT_APP_TICKETMASTER_API_URL}${urls.eventList}?${paramsString}`
		let response = await fetch(requestURL)
		let data = await response.json()

		dispatch(setEventListData(data))
		dispatch(setIsLoading(false))
	}
}

export function fetchUserLocation() {
	return async function(dispatch) {
		const urlParams = serialize({ key: window.REACT_APP_IPREGISTRY_API_KEY })
		const requestURL = `${urls.userLocationService}?${urlParams}`
		let response = await fetch(requestURL)
		let data = await response.json()
		dispatch(setUserLocation(data))
		return data?.location?.country?.code
	}
}

export function setEventListData(data) {
	return {
		type: SET_EVENTLIST_DATA,
		payload: data,
	}
}

export function setIsLoading(boolean) {
	return {
		type: EVENTLIST_LOADING_STATUS,
		payload: boolean,
	}
}

export function setNumberOfPages(number) {
	return {
		type: SET_EVENTLIST_NUMBER_OF_PAGES,
		payload: number,
	}
}

export function setUserLocation(locationObject) {
	return {
		type: SET_USER_LOCATION,
		payload: locationObject,
	}
}
