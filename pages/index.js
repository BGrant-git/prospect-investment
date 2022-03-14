import Head from 'next/head'

import HeroSection from '../components/heroSection/HeroSection'
import NewProjectForm from '../components/newProjectForm/NewProjectForm'

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
			<NewProjectForm />
		</div>
	)
}

export default Index
