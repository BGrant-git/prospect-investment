import Head from 'next/head'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'

import { StoreContext } from '../store/context'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

import { framerMotionVariants } from '../store/framerMotionVariants'
import homepageBackgroundImage from '../public/images/homepage/landing/shutterstock_1212713398.jpg'

const HeroSectionWrapper = styled.div`
	background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.5)),
		url(${homepageBackgroundImage});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	transition: 0.2 ease-in-out;
	position: static;
	border-radius: 0;
	margin-top: -80px;
`

const DyncamicHeroComponent = dynamic(() =>
	import('../components/homeImageText/HomeImageText')
)

const Index = () => {
	const { userData } = useContext(StoreContext)
	const [userDataVal, setUserDataVal] = userData

	useEffect(() => {
		console.log(userDataVal)
	}, [])

	return (
		<motion.div
			variants={framerMotionVariants.fadeIn}
			initial="initial"
			animate="animate"
		>
			<Head>
				<title>Prospect Investment</title>
				<meta
					name="Prospect Investment"
					content="London Property Development."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<HeroSectionWrapper img={homepageBackgroundImage}>
				<DyncamicHeroComponent />
			</HeroSectionWrapper>
			<HomepageProjects />
		</motion.div>
	)
}

export default Index
