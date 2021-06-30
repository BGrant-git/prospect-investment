import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext, CenterRule } from '../context/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'
import {
	Container,
	TitleWrapper,
	StyledH1,
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
				<TitleWrapper>
					<StyledH1>WHO WE ARE</StyledH1>
					<CenterRule />
				</TitleWrapper>
				<CopyComponent />
				<BioSection />
			</Container>
		</motion.div>
	)
}

export default About
