import { createContext, useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import styled from 'styled-components'

import { auth } from '../firebase/firebase'

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
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userData, setUserData] = useState(auth)
	const [scrolled, setScrolled] = useState(false)
	const [projectToDisplay, setProjectToDisplay] = useState('hello')

	const setInitialLoggedInState = () => {
		if (window.localStorage.getItem('user')) {
			setIsLoggedIn(true)
		}
	}

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

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		setInitialLoggedInState()
	}, [])

	return (
		<StoreContext.Provider
			value={{
				matchesSm,
				matchesMd,
				links,
				userData: [userData, setUserData],
				scrolled: [scrolled, setScrolled],
				projectToDisplay: [projectToDisplay, setProjectToDisplay],
				isLoggedIn: [isLoggedIn, setIsLoggedIn],
				handleProjectClick,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}

export default StoreContextProvider
