import { Container, InfoWrapper } from './contactDetailsStyles'
import { contactDetails } from '../../public/text-files/contactDetails'

const ContactDetails = () => {
	return (
		<Container>
			<InfoWrapper>
				<h2>Telephone:</h2>
				<h2>Email:</h2>
			</InfoWrapper>
			<div>
				<a href="tel:0798765432">
					<h2>{contactDetails.phoneNumber}</h2>
				</a>
				<a href="">
					<h2>{contactDetails.email}</h2>
				</a>
			</div>
		</Container>
	)
}

export default ContactDetails
