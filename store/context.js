import { createContext, useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'
import { onAuthStateChanged } from 'firebase/auth'

export const CenterRule = styled.div`
	background-color: ${(props) => props.background};
	width: 60px;
	height: 3px;
	margin: 0 auto 10px;
`

export const LeftRule = styled.div`
	background-color: ${(props) => props.background};
	width: 60px;
	height: 3px;
`

export const RightRule = styled.div`
	background-color: ${(props) => props.background};
	width: 60px;
	height: 3px;
	margin-left: auto;
	margin-right: 0;
`

export const StoreContext = createContext()

const StoreContextProvider = ({ children }) => {
	const matchesSm = useMediaQuery('(min-width: 855px)')
	const matchesMd = useMediaQuery('(min-width:955px)')
	const links = ['Home', 'About', 'Projects', 'Contact']
	const [userData, setUserData] = useState(null)
	const [scrolled, setScrolled] = useState(false)
	const [projectToDisplay, setProjectToDisplay] = useState('hello')

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = () => {
		const offset = window.scrollY
		if (offset > 80) {
			setScrolled(true)
		} else {
			setScrolled(false)
		}
	}

	const handleProjectClick = (project) => {
		setProjectToDisplay(project)
	}

	const isLoggedIn = (user) => {
		setUserData(user)
	}

	const transitionVariants = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.3,
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
				delay: 0.3,
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
				delay: 0.3,
			},
		},
	}

	const framerRightSlideVariants = {
		hidden: { opacity: 0, translateX: '-10%' },
		visible: {
			opacity: 1,
			translateX: '0%',
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	}

	const framerStaggerVariants = {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					delay: 0.3,
					staggerChildren: 0.5,
				},
			},
		},
		item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
	}

	return (
		<StoreContext.Provider
			value={{
				matchesSm,
				matchesMd,
				links,
				transitionVariants,
				framerUpVariants,
				framerLeftSlideVariants,
				framerRightSlideVariants,
				framerStaggerVariants,
				userData: [userData, setUserData],
				scrolled: [scrolled, setScrolled],
				projectToDisplay: [projectToDisplay, setProjectToDisplay],
				handleProjectClick,
				isLoggedIn,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
