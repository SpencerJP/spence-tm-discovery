import {
	SET_EVENTLIST_DATA,
	EVENTLIST_LOADING_STATUS,
	SET_USER_IP_LOCATION,
	SET_EVENTLIST_NUMBER_OF_PAGES,
	SET_ACTIVE_URL_PARAMS,
	ACTIVE_URL_PARAMS_UPDATE_PARAM,
} from "./Types"

const initialState = {
	eventListData: null,
	isLoading: true,
	userLocation: null,
	numberOfPages: null,
	activeUrlParams: {
		apikey: window.REACT_APP_TICKETMASTER_API_KEY,
	},
}

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_EVENTLIST_DATA:
			return {
				...state,
				eventListData: action.payload,
			}
		case EVENTLIST_LOADING_STATUS:
			return {
				...state,
				isLoading: action.payload,
			}
		case SET_USER_IP_LOCATION:
			return {
				...state,
				userLocation: action.payload,
			}
		case SET_EVENTLIST_NUMBER_OF_PAGES:
			return {
				...state,
				numberOfPages: action.payload,
			}
		case SET_ACTIVE_URL_PARAMS:
			if (!action.payload.apikey) {
				// ensure apikey is retained no matter what
				action.payload.apikey = window.REACT_APP_TICKETMASTER_API_KEY
			}
			return {
				...state,
				activeUrlParams: action.payload,
			}
		case ACTIVE_URL_PARAMS_UPDATE_PARAM:
			return {
				...state,
				activeUrlParams: {
					...state.activeUrlParams,
					...action.payload,
				},
			}
		default:
			return state
	}
}
