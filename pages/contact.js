import ContactForm from '../components/contactForm/ContactForm'

import { CenterRule } from '../context/context'
import {
	Container,
	ContentWrapper,
	DetailsWrapper,
	StyledH1,
	InfoWrapper,
} from '../components/pages-styles/contactStyles'
import { contactDetails } from '../public/text-files/contactDetails'

const backgroundImg = require('../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg')

const Contact = () => {
	return (
		<Container backgroundImg={backgroundImg}>
			<StyledH1>Contact Us</StyledH1>
			<CenterRule />
			<ContentWrapper>
				<ContactForm />
				<DetailsWrapper>
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
				</DetailsWrapper>
			</ContentWrapper>
		</Container>
	)
}

export default Contact
