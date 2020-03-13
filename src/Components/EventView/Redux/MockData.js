export const exampleObj = {
	name: "Charlotte Hornets vs. Los Angeles Lakers",
	type: "event",
	id: "G5eVZ4YDbDJmI",
	test: false,
	url:
		"https://www.ticketmaster.com/charlotte-hornets-vs-los-angeles-lakers-charlotte-north-carolina-03-21-2020/event/2D00570ED8EE6BA8",
	locale: "en-us",
	images: [
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_LANDSCAPE_16_9.jpg",
			width: 1136,
			height: 639,
			fallback: false,
		},
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_PORTRAIT_16_9.jpg",
			width: 640,
			height: 360,
			fallback: false,
		},
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_EVENT_DETAIL_PAGE_16_9.jpg",
			width: 205,
			height: 115,
			fallback: false,
		},
		{
			ratio: "3_2",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_PORTRAIT_3_2.jpg",
			width: 640,
			height: 427,
			fallback: false,
		},
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RECOMENDATION_16_9.jpg",
			width: 100,
			height: 56,
			fallback: false,
		},
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_LARGE_16_9.jpg",
			width: 2048,
			height: 1152,
			fallback: false,
		},
		{
			ratio: "16_9",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_16_9.jpg",
			width: 1024,
			height: 576,
			fallback: false,
		},
		{
			ratio: "3_2",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_ARTIST_PAGE_3_2.jpg",
			width: 305,
			height: 203,
			fallback: false,
		},
		{
			ratio: "3_2",
			url:
				"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_3_2.jpg",
			width: 1024,
			height: 683,
			fallback: false,
		},
		{
			ratio: "4_3",
			url: "https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_CUSTOM.jpg",
			width: 305,
			height: 225,
			fallback: false,
		},
	],
	sales: {
		public: {
			startDateTime: "2019-09-09T14:00:00Z",
			startTBD: false,
			endDateTime: "2020-03-22T00:00:00Z",
		},
		presales: [
			{
				startDateTime: "2019-09-06T14:00:00Z",
				endDateTime: "2019-09-09T13:59:00Z",
				name: "2019-20 Hornets Presale",
			},
		],
	},
	dates: {
		start: {
			localDate: "2020-03-21",
			localTime: "19:00:00",
			dateTime: "2020-03-21T23:00:00Z",
			dateTBD: false,
			dateTBA: false,
			timeTBA: false,
			noSpecificTime: false,
		},
		timezone: "America/New_York",
		status: {
			code: "onsale",
		},
		spanMultipleDays: false,
	},
	classifications: [
		{
			primary: true,
			segment: {
				id: "KZFzniwnSyZfZ7v7nE",
				name: "Sports",
			},
			genre: {
				id: "KnvZfZ7vAde",
				name: "Basketball",
			},
			subGenre: {
				id: "KZazBEonSMnZfZ7vFJA",
				name: "NBA",
			},
			type: {
				id: "KZAyXgnZfZ7v7l1",
				name: "Group",
			},
			subType: {
				id: "KZFzBErXgnZfZ7vA7d",
				name: "Team",
			},
			family: false,
		},
	],
	promoter: {
		id: "695",
		name: "NBA REGULAR SEASON",
		description: "NBA REGULAR SEASON / NTL / USA",
	},
	promoters: [
		{
			id: "695",
			name: "NBA REGULAR SEASON",
			description: "NBA REGULAR SEASON / NTL / USA",
		},
	],
	pleaseNote:
		"All Prices Include Applicable NC Sales Taxes For luxury seating options (including Suites/Royal Boxes/Terrace Tables), please call 704-HORNETS.",
	priceRanges: [
		{
			type: "standard",
			currency: "USD",
			min: 97.5,
			max: 1205,
		},
	],
	seatmap: {
		staticUrl:
			"https://maps.ticketmaster.com/maps/geometry/3/event/2D00570ED8EE6BA8/staticImage?type=png&systemId=HOST",
	},
	accessibility: {
		info:
			"Wheelchair + Companion Seating: Located in all levels of the Coliseum based on event setup for particular event. Mobility Impaired Patrons + Companion Seating :Located in all levels of the Coliseum based on event setup for particular event.",
	},
	ticketLimit: {
		info: "There is a 14 ticket limit for this event.",
	},
	_links: {
		self: {
			href: "/discovery/v2/events/G5eVZ4YDbDJmI?locale=en-us",
		},
		attractions: [
			{
				href: "/discovery/v2/attractions/K8vZ9175Nnf?locale=en-us",
			},
			{
				href: "/discovery/v2/attractions/K8vZ91718T0?locale=en-us",
			},
		],
		venues: [
			{
				href: "/discovery/v2/venues/KovZpZA6AEIA?locale=en-us",
			},
		],
	},
	_embedded: {
		venues: [
			{
				name: "Spectrum Center ",
				type: "venue",
				id: "KovZpZA6AEIA",
				test: false,
				url: "https://www.ticketmaster.com/spectrum-center-tickets-charlotte/venue/369357",
				locale: "en-us",
				images: [
					{
						ratio: "16_9",
						url: "https://s1.ticketm.net/dbimages/18670v.jpg",
						width: 205,
						height: 115,
						fallback: false,
					},
				],
				postalCode: "28202",
				timezone: "America/New_York",
				city: {
					name: "Charlotte",
				},
				state: {
					name: "North Carolina",
					stateCode: "NC",
				},
				country: {
					name: "United States Of America",
					countryCode: "US",
				},
				address: {
					line1: "333 East Trade Street",
				},
				location: {
					longitude: "-80.839921",
					latitude: "35.225222",
				},
				markets: [
					{
						name: "Charlotte",
						id: "2",
					},
					{
						name: "All of US",
						id: "51",
					},
					{
						name: "South Carolina",
						id: "121",
					},
				],
				dmas: [
					{
						id: 200,
					},
					{
						id: 243,
					},
					{
						id: 245,
					},
					{
						id: 256,
					},
					{
						id: 278,
					},
					{
						id: 291,
					},
				],
				social: {
					twitter: {
						handle: "@TWCArena",
					},
				},
				boxOfficeInfo: {
					phoneNumberDetail:
						"704-688-8600 For general group sales questions for Spectrum Center: 704.688.9047",
					openHoursDetail: "M-F: 10:00 am – 6:00 pm Sat & Sun: Event days only",
					acceptedPaymentDetail: "cash, amex, mc, visa, discover",
					willCallDetail:
						"Location at venue: Main Box Office – East side of the Arena with access from both Trade and Fifth Streets. Hours of Operation: Same as Box Office Hours",
				},
				parkingDetail:
					"Location: None. There are approx. 30,000 parking spaces within a 15 minute walk of Spectrum Center. Prices vary by lot.",
				accessibleSeatingDetail:
					"This venue is accessible. For sight impaired and hearing patrons please contact the Box Office. Spectrum Center is committed to providing every guest with a comfortable and enjoyable experience. The arena is one of the most accessible arenas in the U.S. Seating throughout the venue allows guests with accessible needs flexibility in seat locations and price levels.",
				generalInfo: {
					generalRule:
						"Spectrum Center is committed to creating a safe, comfortable, and enjoyable sports and entertainment experience. Guests of Spectrum Center have a right to expect an environment where guests will: • Respect and appreciate each and every fan. • Be treated in a consistent, professional and courteous manner by all arena and team personnel. • Enjoy the arena experience free from disruptive behavior, including foul or abusive language or obscene gestures. • Consume alcoholic beverages in a responsible manner. Intervention with an impaired, intoxicated or underage guest will be handled in a prompt and safe manner • Sit only in ticketed seats and show tickets when requested. • Act in an appropriate manner without fighting, throwing objects or attempting to enter the court or stage area. • Smoke in designated smoking areas only. • Wear appropriate clothing and have signage that is free of any obscene or indecent messages. • Comply with requests from arena staff regarding arena operations and emergency response procedures. The arena staff has been trained to intervene where necessary to help ensure that the above expectations are met, and guests are encouraged to report any inappropriate behavior to the nearest event staff member. Guests who choose not to adhere to these provisions will be subject to ejection without refund and revocation of tickets and may also be in violation of the law resulting in possible arrest and prosecution.",
					childRule:
						"Children 2 years or older must have a ticket for most events at the Spectrum Center. This age restriction can fluctuate from event to event.",
				},
				upcomingEvents: {
					_total: 21,
					ticketmaster: 21,
				},
				_links: {
					self: {
						href: "/discovery/v2/venues/KovZpZA6AEIA?locale=en-us",
					},
				},
			},
		],
		attractions: [
			{
				name: "Charlotte Hornets",
				type: "attraction",
				id: "K8vZ9175Nnf",
				test: false,
				url: "https://www.ticketmaster.com/charlotte-hornets-tickets/artist/931493",
				locale: "en-us",
				aliases: ["charlotte bobcats"],
				images: [
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_LANDSCAPE_16_9.jpg",
						width: 1136,
						height: 639,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_PORTRAIT_16_9.jpg",
						width: 640,
						height: 360,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_EVENT_DETAIL_PAGE_16_9.jpg",
						width: 205,
						height: 115,
						fallback: false,
					},
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RETINA_PORTRAIT_3_2.jpg",
						width: 640,
						height: 427,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_RECOMENDATION_16_9.jpg",
						width: 100,
						height: 56,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_LARGE_16_9.jpg",
						width: 2048,
						height: 1152,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_16_9.jpg",
						width: 1024,
						height: 576,
						fallback: false,
					},
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_ARTIST_PAGE_3_2.jpg",
						width: 305,
						height: 203,
						fallback: false,
					},
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_TABLET_LANDSCAPE_3_2.jpg",
						width: 1024,
						height: 683,
						fallback: false,
					},
					{
						ratio: "4_3",
						url: "https://s1.ticketm.net/dam/a/949/a7d02c0d-d3c5-4c48-ba09-8fd44ee3d949_1043081_CUSTOM.jpg",
						width: 305,
						height: 225,
						fallback: false,
					},
				],
				classifications: [
					{
						primary: true,
						segment: {
							id: "KZFzniwnSyZfZ7v7nE",
							name: "Sports",
						},
						genre: {
							id: "KnvZfZ7vAde",
							name: "Basketball",
						},
						subGenre: {
							id: "KZazBEonSMnZfZ7vFJA",
							name: "NBA",
						},
						type: {
							id: "KZAyXgnZfZ7v7l1",
							name: "Group",
						},
						subType: {
							id: "KZFzBErXgnZfZ7vA7d",
							name: "Team",
						},
						family: false,
					},
				],
				upcomingEvents: {
					_total: 15,
					ticketmaster: 15,
				},
				_links: {
					self: {
						href: "/discovery/v2/attractions/K8vZ9175Nnf?locale=en-us",
					},
				},
			},
			{
				name: "Los Angeles Lakers",
				type: "attraction",
				id: "K8vZ91718T0",
				test: false,
				url: "https://www.ticketmaster.com/los-angeles-lakers-tickets/artist/805962",
				locale: "en-us",
				aliases: ["los angeles lakers", "la lakers", "laker", "laker tickets", "lakers tickets"],
				images: [
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_ARTIST_PAGE_3_2.jpg",
						width: 305,
						height: 203,
						fallback: false,
					},
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_TABLET_LANDSCAPE_3_2.jpg",
						width: 1024,
						height: 683,
						fallback: false,
					},
					{
						ratio: "4_3",
						url: "https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_CUSTOM.jpg",
						width: 305,
						height: 225,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_RETINA_LANDSCAPE_16_9.jpg",
						width: 1136,
						height: 639,
						fallback: false,
					},
					{
						ratio: "3_2",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_RETINA_PORTRAIT_3_2.jpg",
						width: 640,
						height: 427,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_TABLET_LANDSCAPE_LARGE_16_9.jpg",
						width: 2048,
						height: 1152,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_RETINA_PORTRAIT_16_9.jpg",
						width: 640,
						height: 360,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_RECOMENDATION_16_9.jpg",
						width: 100,
						height: 56,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_EVENT_DETAIL_PAGE_16_9.jpg",
						width: 205,
						height: 115,
						fallback: false,
					},
					{
						ratio: "16_9",
						url:
							"https://s1.ticketm.net/dam/a/441/6c483401-d57c-41b7-aee7-bb94e5b58441_29091_TABLET_LANDSCAPE_16_9.jpg",
						width: 1024,
						height: 576,
						fallback: false,
					},
				],
				classifications: [
					{
						primary: true,
						segment: {
							id: "KZFzniwnSyZfZ7v7nE",
							name: "Sports",
						},
						genre: {
							id: "KnvZfZ7vAde",
							name: "Basketball",
						},
						subGenre: {
							id: "KZazBEonSMnZfZ7vFJA",
							name: "NBA",
						},
						type: {
							id: "KZAyXgnZfZ7v7l1",
							name: "Group",
						},
						subType: {
							id: "KZFzBErXgnZfZ7vA7d",
							name: "Team",
						},
						family: false,
					},
				],
				upcomingEvents: {
					_total: 17,
					ticketmaster: 17,
				},
				_links: {
					self: {
						href: "/discovery/v2/attractions/K8vZ91718T0?locale=en-us",
					},
				},
			},
		],
	},
}
