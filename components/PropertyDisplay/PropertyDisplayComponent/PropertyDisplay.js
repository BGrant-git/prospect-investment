import Grid from '@material-ui/core/Grid'

import PropertyHeroSection from '../PropertyHero/PropertyHero'
import PropertyGallery from '../PropertyGallery/PropertyGallery'

import { Container } from './propertyDisplayStyles'

const PropertyDisplay = (props) => {
	return (
		<Grid container>
			<Container>
				<PropertyHeroSection />
				<PropertyGallery />
			</Container>
		</Grid>
	)
}

export default PropertyDisplay
