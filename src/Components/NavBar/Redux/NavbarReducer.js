import { NAVBAR_SWITCH_TABS } from "./Types"

const initialState = {
	currentTab: null,
}

export default function(state = initialState, action) {
	switch (action.type) {
		case NAVBAR_SWITCH_TABS:
			return {
				...state,
				currentTab: action.payload,
			}
		default:
			return state
	}
}
