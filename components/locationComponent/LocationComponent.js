import { Grid } from '@material-ui/core'

import { Container, LinkWrapper, TextWrapper } from './locationComponentStyles'
import { contactDetails, address } from '../../public/text-files/contactDetails'

const LocationComponent = () => {
	return (
		<Container>
			<h1>Or speak to us</h1>
			<Grid container>
				<Grid item xs={12} md={4}>
					<h2>Address</h2>
					<TextWrapper>
						{address.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</TextWrapper>
				</Grid>
				<Grid item xs={12} md={4}>
					<h2>Phone</h2>
					<TextWrapper>
						{contactDetails.map((item, i) => (
							<p key={i}>
								{item.name}:{' '}
								<LinkWrapper href={`tel:${item.phoneNumber}`}>
									{item.phoneNumber}
								</LinkWrapper>
							</p>
						))}
					</TextWrapper>
				</Grid>
				<Grid item xs={12} md={4}>
					<h2>Email</h2>
					<TextWrapper>
						{contactDetails.map((item, i) => (
							<p key={i}>
								{item.name}:{' '}
								<LinkWrapper href={`mailto:${item.email}`}>
									{item.email}
								</LinkWrapper>
							</p>
						))}
					</TextWrapper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LocationComponent
