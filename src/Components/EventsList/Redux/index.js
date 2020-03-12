import * as actions from "./Actions"
import * as mockData from "./MockData"
import EventsListReducer from "./EventsListReducer"
import * as types from "./Types"
import { reducerManager } from "../../../../Store"

reducerManager.add("eventListReducer", EventsListReducer)
export { actions, mockData, types }
