import * as actions from "./Actions"
import * as mockData from "./MockData"
import SingleEventReducer from "./SingleEventReducer"
import * as types from "./Types"
import { reducerManager } from "../../../Store"

reducerManager.add("singleEventReducer", SingleEventReducer)
export default SingleEventReducer
export { actions, mockData, types }
