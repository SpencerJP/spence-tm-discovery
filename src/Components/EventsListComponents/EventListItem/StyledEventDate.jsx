import React from "react"
import PropTypes from "prop-types"

export const StyledEventDate = props => {
	let dateObj = new Date(props.children)
	return (
		<div style={{ textAlign: "right", marginRight: "1.3em" }}>
			<div style={{ fontSize: "1.3em" }}>{dateObj.getDate()}</div>
			<div style={{ fontSize: "1.5em", fontWeight: "bold", fontFamily: "Open Sans" }}>
				{dateObj.toLocaleString("default", { month: "short" })}
			</div>
		</div>
	)
}

StyledEventDate.propTypes = {
	children: PropTypes.string.isRequired,
}
