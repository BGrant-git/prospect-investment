import Grid from '@material-ui/core/Grid'

import PropertyHeroSection from '../PropertyHero/PropertyHero'
import PropertyText from '../propertyText/PropertyText'
import PropertyGallery from '../PropertyGallery/PropertyGallery'

import { Wrapper } from './propertyDisplayStyles'

import { projectsDataLong } from '../../../public/text-files/projectsText'

const PropertyDisplay = ({ propertyData }) => {
	return (
		<Grid container>
			<Wrapper>
				<PropertyHeroSection
					img={propertyData.heroImg}
					agentLogo={propertyData.agentLogo}
					title={propertyData.title}
					subtitle={propertyData.subtitle}
					text={propertyData.text}
				/>
				<PropertyText
					desc={propertyData.text.description}
					keyFeatures={propertyData.text.keyFeatures}
					location={propertyData.text.location}
				/>
				<PropertyGallery />
			</Wrapper>
		</Grid>
	)
}

export default PropertyDisplay
