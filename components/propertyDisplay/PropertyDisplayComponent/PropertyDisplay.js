import { Grid } from '@mui/material'

import PropertyHeroSection from '../PropertyHero/PropertyHero'
import PropertyText from '../propertyText/PropertyText'
import PropertyGallery from '../PropertyGallery/PropertyGallery'

import { Wrapper } from './propertyDisplayStyles'

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
