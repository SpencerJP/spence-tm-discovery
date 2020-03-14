import {
	SET_EVENTLIST_DATA,
	EVENTLIST_LOADING_STATUS,
	SET_USER_LOCATION,
	SET_EVENTLIST_NUMBER_OF_PAGES,
} from "./Types"

const initialState = {
	eventListData: null,
	isLoading: false,
	userLocation: null,
	numberOfPages: null,
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
		case SET_USER_LOCATION:
			return {
				...state,
				userLocation: action.payload,
			}
		case SET_EVENTLIST_NUMBER_OF_PAGES:
			return {
				...state,
				numberOfPages: action.payload,
			}
		default:
			return state
	}
}
