import * as actions from "./Actions"
import * as mockData from "./MockData"
import EventListReducer from "./EventListReducer"
import * as types from "./Types"
import { reducerManager } from "../../../Store"

reducerManager.add("eventListReducer", EventListReducer)
export default EventListReducer
export { actions, mockData, types }
