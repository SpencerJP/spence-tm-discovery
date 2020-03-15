import { serialize } from "../../../Utilities/Requests/serializeToURLParams"
import {
	SET_EVENTLIST_DATA,
	EVENTLIST_LOADING_STATUS,
	SET_EVENTLIST_NUMBER_OF_PAGES,
	SET_USER_IP_LOCATION,
	SET_ACTIVE_URL_PARAMS,
	ACTIVE_URL_PARAMS_UPDATE_PARAM,
} from "./Types"

export const urls = {
	eventList: "/events.json",
	userLocationService: "https://api.ipregistry.co/",
}

const insertCountryCode = async (dispatch, params) => {
	if (!params?.countryCode) {
		// no country found in parameters, let's check the user's country
		let country = await dispatch(fetchUserLocation())
		if (country) {
			dispatch(setActiveUrlParams({ ...params, countryCode: country }))
		}
	}
}

export function fetchEventList() {
	return async function(dispatch, getState) {
		dispatch(setIsLoading(true))
		console.log(getState())

		let { activeUrlParams } = getState().eventListReducer
		if (!activeUrlParams.countryCode) {
			await insertCountryCode(dispatch, activeUrlParams) // load the params with the user's current country by IP Address
			activeUrlParams = getState().eventListReducer.activeUrlParams
		}

		const paramsString = serialize(activeUrlParams) // convert params into an URL string
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
		dispatch(setUserIPLocation(data))
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

export function setUserIPLocation(locationObject) {
	return {
		type: SET_USER_IP_LOCATION,
		payload: locationObject,
	}
}

export function setActiveUrlParams(paramsObject) {
	return {
		type: SET_ACTIVE_URL_PARAMS,
		payload: paramsObject,
	}
}

/**
 *  the difference between this one and the one above is this
 * will only update the key value pairs supplied by paramsObject instead of the entire object
 * @param {*} paramsObject key value pairs to update
 */
export function updateSingleParamActiveUrl(paramsObject) {
	return {
		type: ACTIVE_URL_PARAMS_UPDATE_PARAM,
		payload: paramsObject,
	}
}
