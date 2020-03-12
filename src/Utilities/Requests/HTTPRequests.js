import { GET_REQUEST_ERROR, JSON_PARSE_ERROR } from "./ErrorTypes"
/**
 * @param {string} targetURL The url that you are fetching the data from.
 * @param {string} type the type that the reducer will be using to determine the action.
 * @param {function} optional_dataAccessorFunc An accessor function to get the data from the result, optional
 * @returns a dispatch a function for Redux
 */
export function GETRequest(targetURL, type, optional_dataAccessorFunc) {
	return async function(dispatch) {
		let response
		try {
			response = await fetch(targetURL)
			if (response && !response.ok) {
				throw new Error("Fetch: Not OK - Status Code " + response.status)
			}
		} catch (err) {
			// dispatch a get request error so that our application can display an appriopriate error message
			dispatch({
				type: GET_REQUEST_ERROR,
				payload: `Error while fetching in ${type}: ${err}`,
			})
			if (err && err.message && !err.message.includes("Not OK")) {
				return "done" // end promise
			}
		}
		let data
		try {
			data = await response.json()
		} catch (err) {
			// dispatch a json parse error so that our application can display an appriopriate error message
			dispatch({
				type: JSON_PARSE_ERROR,
				payload: `JSON Parse Error in ${type}: ${err}`,
			})
			return "done"  // end promise
		}
		try {
			dispatch({
				type: type,
				payload: optional_dataAccessorFunc ? optional_dataAccessorFunc(data) : data,
			})
		} catch (err) {
			dispatch({
				type: JSON_PARSE_ERROR,
				payload: `Error accessing data in ${type}: ${err}`,
			})
			return "done"
		}
		return "done"
	}
}