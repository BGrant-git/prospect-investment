import Head from 'next/head'
import styled from 'styled-components'

import HomeImageText from '../components/homeImageText/HomeImageText'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

const homepageBackgroundImage = require('../public/images/homepage/landing/shutterstock_1212713398.jpg')

const HeroSectionContainer = styled.div`
	background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.5)),
		url(${(props) => props.img});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin-top: -80px;
	border-radius: 0;
	transition: 0.5s ease-in-out;

	@media (max-width: 855px) {
		background-position-x: 15%;
		height: 600px;
	}
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
			<HeroSectionContainer img={homepageBackgroundImage}>
				<HomeImageText />
			</HeroSectionContainer>
			<HomepageProjects />
			{/* <HomepageCards /> */}
		</div>
	)
}

export default Index
