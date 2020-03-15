export function serialize(object) {
	var str = []
	for (var p in object)
		if (Object.prototype.hasOwnProperty.call(object, p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]))
		}
	return str.join("&")
}

//ensure that the params for any ticketmaster url are encoded and have an api key present.
// ended up doing something different, unused
/**
 *
 * @unused
 */
export function setupURLParamsTicketMaster(paramsObject) {
	if (!paramsObject) {
		paramsObject = {}
	}
	if (paramsObject.apikey === undefined) {
		paramsObject.apikey = window.REACT_APP_TICKETMASTER_API_KEY
	}
	return serialize(paramsObject)
}
