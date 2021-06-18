import Head from 'next/head'
import { useContext } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import { StoreContext } from '../context/context'
import HomeImageText from '../components/homeImageText/HomeImageText'
import HomepageCards from '../components/homepageCards/HomepageCards'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

const homepageBackgroundImage = require('../public/images/homepage/homepageBackground.jpg')

const MainSectionContainer = styled.div`
	background: linear-gradient(rgba(25, 25, 112, 0.05), rgba(25, 25, 112, 0.3)),
		url(${(props) => props.img});
	height: 800px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 855px) {
		background-position-x: 15%;
		height: 600px;
	}
`

const Index = () => {
	const { transVariants } = useContext(StoreContext)

	return (
		<AnimatePresence>
			<motion.div
				initial={transVariants.initial}
				animate={transVariants.animate}
			>
				<div>
					<Head>
						<title>Prospect Investment</title>
						<meta
							name="Prospect Investment"
							content="London Property Development."
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>
					<MainSectionContainer img={homepageBackgroundImage}>
						<HomeImageText />
					</MainSectionContainer>
					<HomepageProjects />
					<HomepageCards />
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

export default Index
