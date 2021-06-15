import Head from 'next/head'
import { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
	const controls = useAnimation()

	const { ref, inView } = useInView()

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

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<>
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
			<motion.div
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={boxVariants}
			>
				<HomepageCards />
			</motion.div>
		</>
	)
}

export default Index
