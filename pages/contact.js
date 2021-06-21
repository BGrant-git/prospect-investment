import { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { StoreContext } from '../context/context'
import ContactForm from '../components/contactForm/ContactForm'
import LocationComponent from '../components/contactDetails/ContactDetails'

const backgroundImg = require('../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg')

const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background: url(${(props) => props.backgroundImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`

const Contact = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={transitionVariants}
		>
			<Container backgroundImg={backgroundImg}>
				<LocationComponent />
				<ContactForm />
			</Container>
		</motion.div>
	)
}

export default Contact
