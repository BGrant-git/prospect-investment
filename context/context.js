import { createContext } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const matchesSm = useMediaQuery('(min-width: 855px)')
	const matchesMd = useMediaQuery('(min-width:920px)')
	const links = ['Home', 'About', 'Projects', 'Contact']

	return (
		<StoreContext.Provider value={{ matchesSm, matchesMd, links }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
