import { CenterRule } from '../context/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'
import {
	Container,
	ContentWrapper,
	TitleWrapper,
	StyledH1,
} from '../components/pages-styles/aboutStyles'

const copyBackground = require('../public/images/about/shutterstock_179448743.jpg')

const About = () => {
	return (
		<>
			<Container bg={copyBackground}>
				<ContentWrapper>
					<TitleWrapper>
						<StyledH1>WHO WE ARE</StyledH1>
						<CenterRule style={{ backgroundColor: 'white' }} />
					</TitleWrapper>
					<CopyComponent />
					<BioSection />
				</ContentWrapper>
			</Container>
		</>
	)
}

export default About
