import Head from 'next/head'
import styled from 'styled-components'

const homepageBackgroundImage = require('../public/images/homepage/homepageBackground.jpg')

const Container = styled.div`
	background-image: url(${(props) => props.img});
	height: 800px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	--main-colour: #009eef @media (max-width: 855px) {
		background-position-x: 15%;
	}
`

const Index = () => {
	return (
		<>
			<Head>
				<title>Weather App</title>
				<meta name="Weather App" content="Find weather locally and globally." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Container img={homepageBackgroundImage}></Container>
		</>
	)
}

export default Index
