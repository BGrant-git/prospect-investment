import { Grid } from '@mui/material'

import PropertyHeroSection from '../PropertyHero/PropertyHero'
import PropertyText from '../propertyText/PropertyText'
import PropertyGallery from '../PropertyGallery/PropertyGallery'

import { Wrapper } from './propertyDisplayStyles'

/**
 * add completed status to display
 * sort out image display so it is less of a static grid
 *
 *
 */

const PropertyDisplay = ({ propertyData }) => {
	return (
		<Grid container>
			<Wrapper>
				<PropertyHeroSection
					img={propertyData.heroImg}
					title={propertyData.title}
				/>
				<PropertyText
					location={propertyData.location}
					desc={propertyData.description}
					keyFeatures={propertyData.keyFeatures}
				/>
				<PropertyGallery images={propertyData.imageURLs} />
			</Wrapper>
		</Grid>
	)
}

export default PropertyDisplay
