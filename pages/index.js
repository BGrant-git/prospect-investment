import Head from 'next/head'
import styled from 'styled-components'

import HomeImageText from '../components/homeImageText/HomeImageText'

const homepageBackgroundImage = require('../public/images/homepage/homepageBackground.jpg')

const Container = styled.div`
	background: url(${(props) => props.img});
	height: 800px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	justify-content: flex-end;
	align-items: center;

	--main-colour: #009eef;

	@media (max-width: 855px) {
		background-position-x: 15%;
	}
`

const Index = () => {
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
			<Container img={homepageBackgroundImage}>
				<HomeImageText />
			</Container>
		</>
	)
}

export default Index
