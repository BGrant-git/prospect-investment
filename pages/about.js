import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext, CenterRule } from '../context/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'
import {
	Container,
	TitleContainer,
	Title,
} from '../components/pages-styles/aboutStyles'

const About = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={transitionVariants}
			key="about"
		>
			<Container>
				<TitleContainer>
					<Title>WHO WE ARE</Title>
					<CenterRule />
				</TitleContainer>
				<CopyComponent />
				<BioSection />
			</Container>
		</motion.div>
	)
}

export default About
