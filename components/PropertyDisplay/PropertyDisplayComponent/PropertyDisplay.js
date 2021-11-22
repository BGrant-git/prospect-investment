import Grid from '@material-ui/core/Grid'

import PropertyHeroSection from '../PropertyHero/PropertyHero'

import { Container } from './propertyDisplayStyles'

const PropertyDisplay = (props) => {
	return (
		<Grid container>
			<Container>
				<PropertyHeroSection />
			</Container>
		</Grid>
	)
}

export default PropertyDisplay
