import { createContext, useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const [testState, setTestState] = useState('yes')

	return (
		<StoreContext.Provider value={{ testState: [testState, setTestState] }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
