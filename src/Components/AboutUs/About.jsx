import React from "react"
import { Segment, Header } from "semantic-ui-react"
import { Link } from "react-router-dom"

export function About(props) {
	return (
		<Segment
			style={{
				position: "absolute",
				left: "50%",
				top: "50%",
				webkitTransform: "translate(-50%, -50%)",
				transform: "translate(-50%, -50%)",
			}}
		>
			<Header>Spencer's Event Discovery</Header>
			<p>
				This is a project using{" "}
				<Link
					onClick={() =>
						window.open(
							"https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/",
							"_blank"
						)
					}
				>
					TicketMaster's discovery API
				</Link>{" "}
				to get a list of events.
			</p>
			<p>This project was made primarily with React, Redux and Semantic UI React library.</p>
			<p>
				<Link onClick={() => window.open("https://github.com/SpencerJP/spence-tm-discovery", "_blank")}>
					GitHub link to source code.
				</Link>
			</p>
		</Segment>
	)
}
