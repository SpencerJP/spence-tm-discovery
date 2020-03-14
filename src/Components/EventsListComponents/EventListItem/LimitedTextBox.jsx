import React from "react"
import PropTypes from "prop-types"

export const LimitedTextBox = props => {
	return (
		<div
			className="line-clamp"
			style={{
				WebkitLineClamp: props.mobile ? 3 : 9,
			}}
		>
			{props.children}
		</div>
	)
}

LimitedTextBox.propTypes = {
	children: PropTypes.node,
	mobile: PropTypes.bool,
}
