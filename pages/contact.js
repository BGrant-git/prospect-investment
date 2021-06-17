import styled from 'styled-components'

import ContactForm from '../components/contactForm/ContactForm'
import LocationComponent from '../components/locationComponent/LocationComponent'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	margin: 40px 0;
`

const Contact = () => {
	return (
		<Container>
			<ContactForm />
			<LocationComponent />
		</Container>
	)
}

export default Contact
