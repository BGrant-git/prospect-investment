import styled from 'styled-components'

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
	return (
		<Container backgroundImg={backgroundImg}>
			<LocationComponent />
			<ContactForm />
		</Container>
	)
}

export default Contact
