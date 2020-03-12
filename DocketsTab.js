import React, { useState } from "react"
import PerformancePageTemplate from "../PerformancePageTemplate"

import * as d3 from "d3"

//REDUX
import { connect } from "react-redux"
import { getUsers } from "../../../actions/userActions"
import { getDocketReports, getConsultantMedians } from "../../../actions/reportsActions"
import { processDataOptions } from "../../../components/Performance/processDataOptions"
import { getUserDataByID } from "../../../components/Common/getUserDataByID"

const DATE_COLUMN = "create_date"
const ASSIGNED_TIME = "assigned_time"
const FOLLOW_UP_TIME = "follow_up_time"
const ACTIONED_TIME = "actioned_time"

const msToDays = ms => {
	return (ms / (1000 * 60 * 60 * 24)).toFixed(1)
}
const filterFunc = (dateParserFromData, data, users, dateRange, docketTypes, serviceProviders) => {
	return data.filter(element => {
		try {
			if (
				!(
					(users.includes(element.user_id) || users.includes(element.user_empno)) &&
					dateParserFromData(element[DATE_COLUMN]).getTime() >= dateRange[0].getTime() &&
					dateParserFromData(element[DATE_COLUMN]).getTime() <= dateRange[1].getTime()
				)
			) {
				return false
			}

			if (!serviceProviders.includes("all") && !serviceProviders.includes(element.service_provider_name)) {
				return false
			}
			if (
				!(docketTypes.includes("OTHER") && (!element.docket || element.docket.toUpperCase() === "NA")) &&
				!docketTypes.includes("all") &&
				!docketTypes.includes(element.docket.toUpperCase())
			) {
				return false
			}
			return true
		} catch (err) {
			return false
		}
	})
}

function preProcessDataForStackBarGraph(props) {
	const data = props.docketReports
	const dateParserFromData = d3.timeParse("%d/%m/%Y %H:%M:%S")

	var dateRange = [props.dataOptions.dateRange.from, props.dataOptions.dateRange.to]

	let format = groupByFormat(dateRange)

	const dateFormatter = d3.timeFormat(format)
	const dateParserFromFormatted = d3.timeParse(format)

	const docketTypes = props.dataOptions.docketTypes
	const serviceProviders = props.dataOptions.serviceProviders

	let users = props.dataOptions.consultants
	if (users.includes("all")) {
		users = props.users.map(el => el.user_id)
	}

	// filter for users selected

	let filteredData = filterFunc(dateParserFromData, data, users, dateRange, docketTypes, serviceProviders)
	let dateList = []
	//parse the dates, and make an array of all possible parsed dates
	filteredData.forEach(docket => {
		docket.parsed_date = dateFormatter(dateParserFromData(docket[DATE_COLUMN]))
		dateList.push(docket.parsed_date)
	})

	//remove duplicates, sort array in ascending time order, then change it from ["a"] => [{key: "a"}]
	dateList = [...new Set(dateList)]
		.sort((a, b) => dateParserFromFormatted(a).getTime() - dateParserFromFormatted(b).getTime())
		.map(d => {
			let newObj = { key: d }
			// this just populates each user with 0, in case they have no bars to display.
			users.forEach(user => {
				newObj[user] = {
					key: d,
					values: [],
				}
			})
			return newObj
		})

	var nestedData = d3
		.nest()
		.key(d => d.user_id)
		.entries(filteredData)

	nestedData.forEach(element => {
		element.values.forEach(docket => {
			docket.parsed_date = dateFormatter(dateParserFromData(docket[DATE_COLUMN]))
		})

		element.values = d3
			.nest()
			.key(d => d.parsed_date)
			.entries(element.values)

		element.values.forEach(element2 => {
			dateList = dateList.map(element3 => {
				if (element3.key === element2.key) {
					return {
						...element3,
						[element.key]: { ...element2 },
					}
				} else {
					return element3
				}
			})
		})
	})
	nestedData.sort((a, b) => ("" + a.key).localeCompare(b.key))

	return { data: nestedData, format: format, users: users, dateList: dateList }
}

const groupByFormat = dateRange => {
	let timeInMilliSeconds = dateRange[1] - dateRange[0]
	if (timeInMilliSeconds >= 2678400 * 1000 * 3) {
		// (about 3 months)
		return "%Y-%b"
	}
	return "%Y-%b-%d"
}

// eslint-disable-next-line no-unused-vars
const preProcessDataForTable = (props, dataOptions) => {
	const data = props.docketReports
	var dateRange = [dataOptions.dateRange.from, dataOptions.dateRange.to]

	const dateParserFromData = d3.timeParse("%d/%m/%Y %H:%M:%S")
	const docketTypes = props.dataOptions.docketTypes

	let users = dataOptions.consultants
	const serviceProviders = props.dataOptions.serviceProviders

	// filter for users selected
	return filterFunc(dateParserFromData, data, users, dateRange, docketTypes, serviceProviders)
}

const preProcessDataForMedianTable = (props, dataOptions) => {
	const data = props.consultantMedians
	var dateRange = [dataOptions.dateRange.from, dataOptions.dateRange.to]

	const dateParserFromData = d3.timeParse("%d/%m/%Y %H:%M:%S")
	const docketTypes = dataOptions.docketTypes

	let users = dataOptions.consultants
	const serviceProviders = dataOptions.serviceProviders

	let filteredData = filterFunc(dateParserFromData, data, users, dateRange, docketTypes, serviceProviders)
	let groupedArray = d3
		.nest()
		.key(d => d.user_id)
		.entries(filteredData)

	const getConsultantName = userObj => {
		return userObj && userObj.user_firstname
			? `${userObj.user_firstname ? userObj.user_firstname : ""} ${
					userObj.user_lastname ? userObj.user_lastname : ""
			  }`
			: "NA"
	}
	return groupedArray.map(userData => {
		let no_of_tasks = userData.values.filter(
			row => row[ASSIGNED_TIME] && (row[FOLLOW_UP_TIME] || row[ACTIONED_TIME])
		).length
		let median_time_tasks = 0
		let average_time_tasks = 0

		// calculate median and average task time
		if (no_of_tasks) {
			let tasks = userData.values.filter(
				row => row[ASSIGNED_TIME] && (row[FOLLOW_UP_TIME] || row[ACTIONED_TIME])
			)
			let timeDiffs = []
			let i = 0
			for (; i < tasks.length; i++) {
				let row = tasks[i]
				if (row[ACTIONED_TIME]) {
					timeDiffs.push(
						Math.abs(dateParserFromData(row[ACTIONED_TIME]) - dateParserFromData(row[ASSIGNED_TIME]))
					)
				} else if (row[FOLLOW_UP_TIME]) {
					timeDiffs.push(
						Math.abs(dateParserFromData(row[FOLLOW_UP_TIME]) - dateParserFromData(row[ASSIGNED_TIME]))
					)
				}
			}
			average_time_tasks = timeDiffs.reduce((sum, time) => sum + time) / i
			i--
			timeDiffs.sort()
			if (i % 2 === 0) {
				median_time_tasks = timeDiffs[i / 2]
			} else if (i === 0) {
				median_time_tasks = timeDiffs[0]
			} else {
				median_time_tasks = timeDiffs[Math.ceil(i / 2)] + timeDiffs[Math.floor(i / 2)] / 2
			}
		}

		let newRow = {
			user_id: userData.key,
			consultant: getConsultantName(getUserDataByID(props.users, userData.key)),
			consultant_email: getUserDataByID(props.users, userData.key).user_email,
			no_of_tasks: no_of_tasks,
			median_time: msToDays(median_time_tasks),
			avg_time: msToDays(average_time_tasks),
		}
		return newRow
	})
}

function preProcessDataForPieChart(props) {
	const data = props.docketReports

	const dateParserFromData = d3.timeParse("%d/%m/%Y %H:%M:%S")
	const docketTypes = props.dataOptions.docketTypes
	var dateRange = [props.dataOptions.dateRange.from, props.dataOptions.dateRange.to]

	let users = props.dataOptions.consultants
	const serviceProviders = props.dataOptions.serviceProviders
	if (users.includes("all")) {
		users = props.users.map(el => el.user_id)
	}

	// filter for users selected
	var filteredData = filterFunc(dateParserFromData, data, users, dateRange, docketTypes, serviceProviders)

	return d3
		.nest()
		.key(d => d.user_id)
		.entries(filteredData)
}

const DocketsTab = props => {
	const [tooltipContent, setTooltipContent] = useState(<></>)
	const [isLoading, setIsLoading] = useState(false)

	React.useEffect(() => {
		let mounted = true
		async function getData() {
			setIsLoading(true)
			await Promise.all([props.getUsers(), props.getDocketReports(), props.getConsultantMedians()])
			if (mounted) {
				setIsLoading(false)
			}
		}
		getData()
		return () => {
			mounted = false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	var pieChartData = preProcessDataForPieChart(props)
	var stackBarGraphData = preProcessDataForStackBarGraph(props)
	var dataOptions = processDataOptions(props.dataOptions, stackBarGraphData, props.users, true)
	var tableData = preProcessDataForTable(props, dataOptions)
	var medianTableData = preProcessDataForMedianTable(props, dataOptions)

	if (isLoading) {
		return props.loader
	}

	const barGraphProps = {
		name: "altBarGraph",
		id: "performance-bargraph",
		axisLabelX: "Consultants",
		axisLabelY: "Tasks",
		headerText: "Task Metrics Bar Graph",
		...stackBarGraphData,
		dataOptions: dataOptions,
		setTooltipData: setTooltipContent,
	}
	const pieChartProps = {
		name: "pieChart",
		headerText: "Task Metrics Pie Chart",
		id: "performance-piechart",
		data: pieChartData,
		dataOptions: dataOptions,
		setTooltipData: setTooltipContent,
	}
	const dataOptionsProps = {
		dataOptions: props.dataOptions,
		setDataOptions: props.setDataOptions,
		userDataType: "dockets",
		color: true,
		user: true,
		datesRange: true,
		docketsReport: true,
		serviceProviders: true,
		tickets: true,
	}
	const tableProps = {
		dataOptions: props.dataOptions,
		data: tableData,
		csvHeaders: [
			{ label: "User ID", key: "user_id" },
			{ label: "Consultant", key: "consultant" },
			{ label: "Email", key: "consultant_email" },
			{ label: "Service Provider", key: "service_provider_name" },
			{ label: "Task Type", key: "docket" },
			{ label: "Order ID", key: "order_id" },
			{ label: "Case ID", key: "case_id" },
			{ label: "Task ID", key: "task_id" },
			{ label: "Note ID", key: "note_id" },
			{ label: "Create Date", key: "create_date" },
			{ label: "Age", key: "days_diff" },
		],
		tableHeader: { text: "Filtered Data" },
	}
	const medianTableProps = {
		data: medianTableData,
		dataOptions: props.dataOptions,
		csvHeaders: [
			{ label: "User ID", key: "user_id" },
			{ label: "Consultant", key: "consultant" },
			{ label: "Email", key: "consultant_email" },
			{ label: "Number of Tasks", key: "no_of_tasks" },
			{ label: "Median Time", key: "median_time_tasks" },
			{ label: "Average Time", key: "avg_time_tasks" },
		],
		tableHeader: { text: "Time taken to update Task" },
		ignoreCases: true,
	}

	return (
		<PerformancePageTemplate
			id="dockets-performance"
			tooltipContent={tooltipContent}
			barGraphProps={barGraphProps}
			pieChartProps={pieChartProps}
			medianTableProps={medianTableProps}
			dataOptionsProps={dataOptionsProps}
			exportAsImage={props.exportAsImage}
			tableProps={tableProps}
		/>
	)
}

const mapStateToProps = state => ({
	users: state.userReducer.users,
	docketReports: state.reportsReducer.docketReports,
	consultantMedians: state.reportsReducer.consultantMedians,
})

export default connect(mapStateToProps, { getUsers, getDocketReports, getConsultantMedians })(DocketsTab)
