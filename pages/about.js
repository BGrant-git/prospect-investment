import { useContext } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import { CenterRule } from '../store/context'
import BioSection from '../components/bioSection/BioSection'

import { StoreContext } from '../store/context'

import {
	Container,
	ContentWrapper,
	TitleWrapper,
	StyledH1,
} from '../pages/pages-styles/aboutStyles'

import copyBackgroundMob from '../public/images/about/mob-bg.jpg'
import copyBackgroundDesk from '../public/images/about/shutterstock_179448743.jpg'

const DyncamicAboutCopy = dynamic(() =>
	import('../components/aboutCopy/AboutCopy')
)

const About = () => {
	const { transitionVariants, matchesSm } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<Container bg={matchesSm ? copyBackgroundDesk : copyBackgroundMob}>
				<ContentWrapper>
					<TitleWrapper>
						<StyledH1>WHO WE ARE</StyledH1>
						<CenterRule background="white" />
					</TitleWrapper>
					<DyncamicAboutCopy />
					<BioSection />
				</ContentWrapper>
			</Container>
		</motion.div>
	)
}

export default About
