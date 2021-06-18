import { Grid, Link } from '@material-ui/core'

import { Container, LinkWrapper, TextWrapper } from './contactDetailstyles'
import { contactDetails } from '../../public/text-files/contactDetails'

const phoneNumber = contactDetails.phoneNumber
const email = contactDetails.email

const LocationComponent = () => {
	return (
		<Container>
			<h1>Contact Us</h1>
			<Grid container>
				<Grid item xs={12} md={3}>
					<h2>Address</h2>
					<TextWrapper>
						{contactDetails.address.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</TextWrapper>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextWrapper>
						<h3>Phone</h3>
						<LinkWrapper href={`tel:${phoneNumber}`}>{phoneNumber}</LinkWrapper>
					</TextWrapper>
					<h3>Email</h3>
					<TextWrapper>
						<LinkWrapper href={`mailto:${email}`}>{email}</LinkWrapper>
					</TextWrapper>
				</Grid>
				<Grid item xs={12} md={3}>
					<TextWrapper>
						<h3>Business hours</h3>
						{contactDetails.hours.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</TextWrapper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LocationComponent