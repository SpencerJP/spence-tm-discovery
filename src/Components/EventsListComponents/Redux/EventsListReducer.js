import { GET_EVENTLIST_DATA, EVENTLIST_LOADING_STATUS } from "./Types"

const initialState = {
	eventListData: null,
	isLoading: false,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_EVENTLIST_DATA:
			return {
				...state,
				eventListData: action.payload,
			}
		case EVENTLIST_LOADING_STATUS:
			return {
				...state,
				isLoading: action.payload,
			}
		default:
			return state
	}
}
