import * as actions from "./Actions"
import * as mockData from "./MockData"
import NavbarReducer from "./NavbarReducer"
import * as types from "./Types"
import { reducerManager } from "../../../Store"

reducerManager.add("navbarReducer", NavbarReducer)
export default NavbarReducer
export { actions, mockData, types }
