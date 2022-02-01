import { useContext } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

import { StoreContext } from '../store/context'
import { CenterRule } from '../store/context'
import {
	Container,
	ContentWrapper,
	StyledH1,
} from '../pages/pages-styles/contactStyles'
import backgroundImgDesk from '../public/images/contact/desk-bg.jpg'

const DyncamicContactForm = dynamic(() =>
	import('../components/contactForm/ContactForm')
)

const DyncamicContactDetails = dynamic(() =>
	import('../components/contactDetails/ContactDetails')
)

const Contact = () => {
	const { transitionVariants, matchesSm } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<Container backgroundImg={matchesSm ? backgroundImgDesk : null}>
				<StyledH1>Contact Us</StyledH1>
				<CenterRule background="white" />
				<ContentWrapper>
					<DyncamicContactForm />
					<DyncamicContactDetails />
				</ContentWrapper>
			</Container>
		</motion.div>
	)
}

export default Contact
