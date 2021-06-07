import { createContext, useState } from 'react'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const links = ['Home', 'About', 'Projects', 'Contact']

	return (
		<StoreContext.Provider value={{ links }}>{children}</StoreContext.Provider>
	)
}

export default StoreContextProvider
