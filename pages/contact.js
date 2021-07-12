import ContactForm from '../components/contactForm/ContactForm'

import {
	Container,
	ContentWrapper,
	DetailsWrapper,
	StyledH1,
	InfoWrapper,
} from '../components/pages-styles/contactStyles'

const backgroundImg = require('../public/images/homepage/naomi-hebert-MP0bgaS_d1c-unsplash.jpg')

const Contact = () => {
	return (
		<Container backgroundImg={backgroundImg}>
			<ContentWrapper>
				<StyledH1>Contact Us</StyledH1>
				<ContactForm />
				<DetailsWrapper>
					<InfoWrapper>
						<h2>Telephone:</h2>
						<h2>Email:</h2>
					</InfoWrapper>
					<div>
						<a href="tel:0798765432">
							<h2>+44 (0) 798765432</h2>
						</a>
						<a href="">
							<h2>john.invalid@smith.invalid.com</h2>
						</a>
					</div>
				</DetailsWrapper>
			</ContentWrapper>
		</Container>
	)
}

export default Contact
