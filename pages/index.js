import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useContext, useEffect } from 'react'
import dynamic from 'next/dynamic'

import HomepageProjects from '../components/homepageProjects/HomepageProjects'

import { StoreContext } from '../store/context'
import { framerMotionVariants } from '../store/framerMotionVariants'
import homepageBackgroundImage from '../public/images/homepage/landing/backround-gradient.jpg'

const HeroSectionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	transition: 0.2 ease-in-out;
	position: static;
	margin-top: -80px;
`

const DyncamicHeroComponent = dynamic(() =>
	import('../components/homeImageText/HomeImageText')
)

//TODO see if i need these dynamic components

const Index = () => {
	useEffect(() => {}, [])

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
			<HeroSectionWrapper>
				<Image src={homepageBackgroundImage} layout="fill" />
				<DyncamicHeroComponent />
			</HeroSectionWrapper>
			<HomepageProjects />
		</motion.div>
	)
}

export default Index
