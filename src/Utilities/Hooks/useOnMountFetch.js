import { useEffect, useState } from "react"

export function useOnMountFetch(dispatch, actions) {
	const [isComplete, setIsComplete] = useState(false)
	useEffect(() => {
		async function asyncFetch() {
			if (Array.isArray(actions)) {
				for (let i = 0; i < actions.length; i++) {
					if (!isComplete) {
						let args = actions[i].args ? [...actions[i].args] : [] // spread args into array if any
						await dispatch(actions[i].action(...args))
					}
				}
				setIsComplete(true)
			} else {
				if (!isComplete) {
					let args = actions.args ? [...actions.args] : [] // spread args into array if any
					await dispatch(actions.action(...args))
				}
				setIsComplete(true)
			}
		}
		try {
			asyncFetch()
		} catch (err) {
			console.error(err)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
