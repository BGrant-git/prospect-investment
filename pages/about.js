import { useContext } from 'react'
import { motion } from 'framer-motion'

import { CenterRule } from '../store/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'

import { StoreContext } from '../store/context'

import {
	Container,
	ContentWrapper,
	TitleWrapper,
	StyledH1,
} from '../store/pages-styles/aboutStyles'
import copyBackground from '../public/images/about/shutterstock_179448743.jpg'

const About = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<Container bg={copyBackground}>
				<ContentWrapper>
					<TitleWrapper>
						<StyledH1>WHO WE ARE</StyledH1>
						<CenterRule background="white" />
					</TitleWrapper>
					<CopyComponent />
					<BioSection />
				</ContentWrapper>
			</Container>
		</motion.div>
	)
}

export default About
