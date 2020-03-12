export function serialize(object) {
	var str = []
	for (var p in object)
		if (Object.prototype.hasOwnProperty.call(object, p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]))
		}
	return str.join("&")
}
