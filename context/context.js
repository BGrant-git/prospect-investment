import { createContext } from 'react'
import { useMediaQuery } from '@material-ui/core'

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const matchesSm = useMediaQuery('(min-width: 855px)')
	const matchesMd = useMediaQuery('(min-width:920px)')
	const links = ['Home', 'About', 'Projects', 'Contact']

	const transVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 5,
			},
		},
	}

	const framerUpVariants = {
		hidden: { opacity: 0, translateY: '10%' },
		visible: {
			opacity: 1,
			translateY: '0%',
			transition: {
				duration: 0.5,
			},
		},
	}

	const framerLeftSlideVariants = {
		hidden: { opacity: 0, translateX: '10%' },
		visible: {
			opacity: 1,
			translateX: '0%',
			transition: {
				duration: 1,
			},
		},
	}

	return (
		<StoreContext.Provider
			value={{
				matchesSm,
				matchesMd,
				links,
				transVariants,
				framerUpVariants,
				framerLeftSlideVariants,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
