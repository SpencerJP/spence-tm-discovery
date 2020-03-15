import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import thunk from "redux-thunk"
import logger from "redux-logger"
import promise from "redux-promise-middleware"
const defaultMiddleware = [thunk, logger, promise]
const middlewareNoLogger = [thunk, promise]
let store

export function getTestMiddleware() {
	return middlewareNoLogger
}

export function getProductionMiddleware() {
	return middlewareNoLogger
}

export function createReducerManager(initialReducers) {
	// Create an object which maps keys to reducers
	const reducers = { ...initialReducers }

	// Create the initial combinedReducer
	let combinedReducer = combineReducers(reducers)

	// An array which is used to delete state keys when reducers are removed
	let keysToRemove = []

	return {
		getReducerMap: () => reducers,

		// The root reducer function exposed by this object
		// This will be passed to the store
		reduce: (state, action) => {
			// If any reducers have been removed, clean up their state first
			if (keysToRemove.length > 0) {
				state = { ...state }
				for (let key of keysToRemove) {
					delete state[key]
				}
				keysToRemove = []
			}

			// Delegate to the combined reducer
			return combinedReducer(state, action)
		},

		// Adds a new reducer with the specified key
		add: (key, reducer) => {
			if (!key || reducers[key]) {
				return
			}

			// Add the reducer to the reducer mapping
			reducers[key] = reducer

			// Generate a new combined reducer
			combinedReducer = combineReducers(reducers)
		},

		// Removes a reducer with the specified key
		remove: key => {
			if (!key || !reducers[key]) {
				return
			}

			// Remove it from the reducer mapping
			delete reducers[key]

			// Add the key to the list of keys to clean up
			keysToRemove.push(key)

			// Generate a new combined reducer
			combinedReducer = combineReducers(reducers)
		},
	}
}
export var reducerManager = createReducerManager({ baseReducer: (state = {}) => state })

export default function configureStore(initialState, middleware = defaultMiddleware) {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
		store = createStore(reducerManager.reduce, initialState, compose(applyMiddleware(...middleware)))
	} else {
		store = createStore(reducerManager.reduce, initialState, compose(applyMiddleware(...middlewareNoLogger)))
	}

	// Return the modified store
	return store
}
