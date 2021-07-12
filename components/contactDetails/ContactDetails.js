import { CenterRule } from '../../store/context'
import {
	Container,
	ContentWrapper,
	DetailsWrapper,
	ContactMethodWrapper,
	LinkWrapper,
} from './contactDetailsStyles'
import { contactDetails } from '../../public/text-files/contactDetails'

const ContactDetails = () => {
	return (
		<Container>
			<h1>Or get in touch with Tom</h1>
			<CenterRule style={{ background: 'black', width: '20px' }} />
			<ContentWrapper>
				<ContactMethodWrapper>
					<h2>Telephone:</h2>
					<h2>Email:</h2>
				</ContactMethodWrapper>
				<DetailsWrapper>
					<a href="tel:0798765432">
						<h2>{contactDetails.phoneNumber}</h2>
					</a>
					<a href="">
						<h2>{contactDetails.email}</h2>
					</a>
				</DetailsWrapper>
			</ContentWrapper>
		</Container>
	)
}

export default ContactDetails
