import styled from 'styled-components'

import ContactForm from '../components/contactForm/ContactForm'
import LocationComponent from '../components/locationComponent/LocationComponent'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
`

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin: -40px auto 0;
	max-width: 1000px;
	height: 700px;

	@media (max-width: 855px) {
		flex-direction: column;
		align-items: flex-start;
		margin: 0;
	}
`

const Contact = () => {
	return (
		<Container>
			<h1>Contact</h1>
			<ContentContainer>
				<LocationComponent />
				<ContactForm />
			</ContentContainer>
		</Container>
	)
}

export default Contact
