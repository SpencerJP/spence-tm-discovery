const sortTypes = {
	"name,asc": "Name - Ascending",
	"name,desc": "Name - Descending",
	"date,asc": "Date - Ascending",
	"date,desc": "Date - Descending",
	"relevance,asc": "Relevance - Ascending",
	"relevance,desc": "Relevance - Descending",
	"distance,asc": "Distance - Ascending",
	"name,date,asc": "Name, Date - Ascending",
	"name,date,desc": "Name, Date - Descending",
	"date,name,asc": "Date, Name - Ascending",
	"date,name,desc": "Date, Name - Descending",
	"distance,date,asc": "Distance, Date - Ascending",
	"onSaleStartDate,asc": "Sale Start Date - Ascending",
	"id,asc": "ID - Ascending",
	"venueName,asc": "Venue Name - Ascending",
	"venueName,desc": "Venue Name - Descending",
	random: "Random",
}
export let sortOptions = []

for (let [key, value] of Object.entries(sortTypes)) {
	sortOptions.push({ key: key, value: key, text: value })
}
