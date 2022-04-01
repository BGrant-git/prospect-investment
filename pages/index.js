import Head from 'next/head'

import HeroSection from '../components/heroSection/HeroSection'

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
			<HeroSection />
		</div>
	)
}

export default Index
