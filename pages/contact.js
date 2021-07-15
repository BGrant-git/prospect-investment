import { useContext } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import ContactForm from '../components/contactForm/ContactForm'
import ContactDetails from '../components/contactDetails/ContactDetails'

import { StoreContext } from '../store/context'
import { CenterRule } from '../store/context'
import {
	Container,
	ContentWrapper,
	ImageWrapper,
	StyledH1,
} from '../store/pages-styles/contactStyles'
import backgroundImg from '../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'

const yes = '/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'

const Contact = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<ImageWrapper>
				<Image src={yes} layout="fill" priority="true" />
			</ImageWrapper>
			<Container>
				<StyledH1>CONTACT US</StyledH1>
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
