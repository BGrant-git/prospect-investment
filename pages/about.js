import Image from 'next/image'

import { CenterRule } from '../store/context'
import BioSection from '../components/bioSection/BioSection'
import CopyComponent from '../components/copyComponent/CopyComponent'

import {
	Container,
	ContentWrapper,
	TitleWrapper,
	StyledH1,
	ImageWrapper,
} from '../store/pages-styles/aboutStyles'
import copyBackground from '../public/images/about/shutterstock_179448743.jpg'

const yes = '/images/about/shutterstock_179448743.jpg'

const About = () => {
	return (
		<>
			<ImageWrapper>
				<Image src={yes} layout="fill" priority="true" />
			</ImageWrapper>
			<Container>
				<ContentWrapper>
					<TitleWrapper>
						<StyledH1>WHO WE ARE</StyledH1>
						<CenterRule background="white" />
					</TitleWrapper>
					<CopyComponent />
					<BioSection />
				</ContentWrapper>
			</Container>
		</>
	)
}

export default About
