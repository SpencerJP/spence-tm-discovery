import { SELECTED_EVENT_DATA } from "./Types"

const initialState = {
	selectedEventData: null,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case SELECTED_EVENT_DATA:
			return {
				...state,
				selectedEventData: action.payload,
			}
		default:
			return state
	}
}
