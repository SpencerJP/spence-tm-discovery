import React from "react"
import { PropTypes } from "prop-types"
import { timeFormat } from "d3"

// Format like Friday 1.00pm 14/3/20
const timeFormatter = timeFormat("%A %-I.%M%p %-d/%-m/%-y")

export const StyledSaleDate = props => {
	let fromDate = new Date(props.from)
	let toDate = props.to && new Date(props.to)
	return (
		<div style={{ textAlign: "left" }}>
			<span>
				Tickets on sale {timeFormatter(fromDate)}
				{toDate && !props.mobile && <> until {timeFormatter(toDate)}</>}
			</span>
		</div>
	)
}

function isDate(object) {
	return (
		Object.prototype.toString.call(object) === "[object Date]" ||
		Object.prototype.toString.call(new Date(object)) === "[object Date]"
	)
}

function propIsDate(props, propName, componentName) {
	if (!isDate(props[propName])) {
		return new Error(
			"Invalid prop `" +
				propName +
				"` supplied to `" +
				componentName +
				"`. Validation failed. Value was " +
				JSON.stringify(props[propName])
		)
	}
}

StyledSaleDate.propTypes = {
	from: propIsDate,
	to: propIsDate,
	mobile: PropTypes.bool,
}
