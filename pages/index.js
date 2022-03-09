import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import HomeImageText from '../components/homeImageText/HomeImageText'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

import { framerMotionVariants } from '../store/framerMotionVariants'
import homepageBackgroundImage from '../public/images/homepage/landing/background-gradient.webp'

const HeroSectionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	transition: 0.2 ease-in-out;
	position: relative;
	margin-top: -80px;
`

const Index = () => {
	return (
		<div>
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
				{/* <motion.div
					variants={framerMotionVariants.fadeIn}
					initial="initial"
					animate="animate"
				> */}
				<HomeImageText />
				{/* </motion.div> */}
			</HeroSectionWrapper>
			<HomepageProjects />
		</div>
	)
}

export default Index
