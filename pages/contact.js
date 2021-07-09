import styled from 'styled-components'

import ContactForm from '../components/contactForm/ContactForm'
import LocationComponent from '../components/contactDetails/ContactDetails'

const backgroundImg = require('../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg')

const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background: linear-gradient(rgba(25, 25, 112, 0.1), rgba(25, 25, 112, 0.2)),
		url(${(props) => props.backgroundImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: -80px;
	padding-top: 80px;
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
