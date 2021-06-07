import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const homepageBackgroundImage = require('../public/images/homepage/homepageBackground.jpg')

const Container = styled.div`
	background-image: url(${(props) => props.img});
	height: 800px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

const Index = () => {
	return (
		<Container img={homepageBackgroundImage}>
			<Head>
				<title>Weather App</title>
				<meta name="Weather App" content="Find weather locally and globally." />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			hello world!
		</Container>
	)
}

export default Index
