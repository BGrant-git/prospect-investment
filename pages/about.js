import { CenterRule } from '../context/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'
import {
	Container,
	TitleWrapper,
	StyledH1,
} from '../components/pages-styles/aboutStyles'

const About = () => {
	return (
		<Container>
			<TitleWrapper>
				<StyledH1>WHO WE ARE</StyledH1>
				<CenterRule />
			</TitleWrapper>
			<CopyComponent />
			<BioSection />
		</Container>
	)
}

export default About
