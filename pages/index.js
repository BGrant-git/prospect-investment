import Head from 'next/head'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

import HomeImageText from '../components/homeImageText/HomeImageText'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

import homepageBackgroundImage from '../public/images/homepage/landing/shutterstock_1212713398.jpg'

const HeroSectionWrapper = styled.div`
	background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.5)),
		url('images/homepage/landing/shutterstock_1212713398.jpg');
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: static;
	border-radius: 0;
	transition: 0.5s ease-in-out;
	margin-top: -80px;

	@media (max-width: 855px) {
		background-position-x: 15%;
		height: 600px;
		transition: none;
	}
`

const DynamicHeroComponent = dynamic(
	() => import('../components/homeImageText/HomeImageText'),
	{ loading: () => <p>Loading...</p> }
)

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
			<HeroSectionWrapper img={homepageBackgroundImage}>
				<DynamicHeroComponent />
			</HeroSectionWrapper>
			<HomepageProjects />
		</div>
	)
}

export default Index
