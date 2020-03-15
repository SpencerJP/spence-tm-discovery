import React from "react"
import PropTypes from "prop-types"
import { Segment, Button, Grid } from "semantic-ui-react"
import { useSelector, useDispatch } from "react-redux"
import { updateActiveUrlParams, fetchEventList } from "../Redux/Actions"

const onClickHandler = (dispatch, currentPage, type) => {
	if (type === "next") {
		dispatch(updateActiveUrlParams({ page: currentPage + 1 }))
	} else {
		dispatch(updateActiveUrlParams({ page: currentPage - 1 }))
	}
	dispatch(fetchEventList())
}

export function EventListPagination(props) {
	const dispatch = useDispatch()
	const activeUrlParams = useSelector(state => state.eventListReducer.activeUrlParams)
	const numberOfPages = useSelector(state => state.eventListReducer.numberOfPages)
	// display page as one higher than it actually is, since pages start at 0 in the api. 0 could be confusing to users
	const currentPage = activeUrlParams.page ? activeUrlParams.page : 0
	const hidePrevious = currentPage === 0
	const hideNext = currentPage === numberOfPages
	return (
		<Segment className="event-list-pagination">
			<Grid>
				<Grid.Row centered style={{ textAlign: "center" }} columns={props.mobile ? 3 : undefined}>
					<Grid.Column width={props.mobile ? undefined : 2}>
						<Button
							className="pagination-button"
							color="blue"
							style={{ display: hidePrevious ? "none" : "inline-block" }}
							onClick={() => onClickHandler(dispatch, currentPage, "previous")}
						>
							Previous
						</Button>
					</Grid.Column>

					<Grid.Column width={props.mobile ? undefined : 2}>
						{/* Add 1 to make the numbers less confusing for users */}
						<div>
							Page {currentPage + 1} of {numberOfPages + 1}
						</div>
					</Grid.Column>
					<Grid.Column width={props.mobile ? undefined : 2}>
						<Button
							className="pagination-button"
							color="blue"
							style={{ display: hideNext ? "none" : "inline-block" }}
							onClick={() => onClickHandler(dispatch, currentPage, "next")}
						>
							Next
						</Button>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Segment>
	)
}

EventListPagination.propTypes = {
	mobile: PropTypes.bool,
}
