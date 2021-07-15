import { useContext } from 'react'
import { motion } from 'framer-motion'

import ContactForm from '../components/contactForm/ContactForm'
import ContactDetails from '../components/contactDetails/ContactDetails'

import { StoreContext } from '../store/context'
import { CenterRule } from '../store/context'
import {
	Container,
	ContentWrapper,
	StyledH1,
} from '../store/pages-styles/contactStyles'
import backgroundImg from '../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'

const Contact = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<Container backgroundImg={backgroundImg}>
				<StyledH1>Contact Us</StyledH1>
				<CenterRule background="white" />
				<ContentWrapper>
					<ContactForm />
					<ContactDetails />
				</ContentWrapper>
			</Container>
		</motion.div>
	)
}

export default Contact
