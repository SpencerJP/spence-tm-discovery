import React from "react"
import PropTypes from "prop-types"
import { Grid, Image } from "semantic-ui-react"

export function ImageColumn({ src, mobile }) {
	if (!src) {
		return null
	}
	return <Grid.Column width={mobile ? 16 : 8}>{src && <Image src={src} size="medium" />}</Grid.Column>
}

ImageColumn.propTypes = {
	src: PropTypes.string,
	mobile: PropTypes.bool,
}
