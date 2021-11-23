import Grid from '@material-ui/core/Grid'

import PropertyHeroSection from '../PropertyHero/PropertyHero'
import PropertyText from '../propertyText/PropertyText'
import PropertyGallery from '../PropertyGallery/PropertyGallery'

import { Container } from './propertyDisplayStyles'

import { projectsDataLong } from '../../../public/text-files/projectsText'

const PropertyDisplay = (props) => {
	return (
		<Grid container>
			<Container>
				<PropertyHeroSection />
				<PropertyText />
				<PropertyGallery />
			</Container>
		</Grid>
	)
}

export default PropertyDisplay
