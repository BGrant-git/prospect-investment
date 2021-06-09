import { createContext } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const matches = useMediaQuery('(min-width:920px)')
	const links = ['Home', 'About', 'Projects', 'Contact']

	return (
		<StoreContext.Provider value={{ matches, links }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
