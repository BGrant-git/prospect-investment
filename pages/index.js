import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

import HomeImageText from '../components/homeImageText/HomeImageText'
import HomepageProjects from '../components/homepageProjects/HomepageProjects'

const homepageBackgroundImage =
	'/images/homepage/landing/shutterstock_1212713398.jpg'

const HeroSectionWrapper = styled.div`
	/* background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.5));
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	transition: 0.2 ease-in-out;
	position: static;
	border-radius: 0;
	margin-top: -80px;

	@media (max-width: 855px) {
		transition: none;
	}
`

const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;

	&:after {
		position: absolute;
		background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.5));
		height: 100%;
		width: 100%;
		content: '';
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
			<HeroSectionWrapper>
				<ImageWrapper>
					<Image src={homepageBackgroundImage} layout="fill" priority="true" />
				</ImageWrapper>
				<HomeImageText />
			</HeroSectionWrapper>
			<HomepageProjects />
		</div>
	)
}

export default Index
