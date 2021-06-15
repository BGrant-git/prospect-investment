import { createContext } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const matchesSm = useMediaQuery('(min-width: 855px)')
	const matchesMd = useMediaQuery('(min-width:920px)')
	const links = ['Home', 'About', 'Projects', 'Contact']

	const boxVariants = {
		hidden: { opacity: 0, translateY: '10%' },
		visible: {
			opacity: 1,
			translateY: '0%',
			transition: {
				duration: 0.5,
			},
		},
	}

	return (
		<StoreContext.Provider value={{ matchesSm, matchesMd, links, boxVariants }}>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
