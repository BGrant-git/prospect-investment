import Link from 'next/link'

import { landingText } from '../../public/text-files/homepageText'

import {
	Container,
	TextContainer,
	Button,
	ButtonContainer,
	Header,
	SubHeader,
} from './homeImageTextStyles'

const HomeImageText = () => {
	return (
		<Container>
			<TextContainer>
				<Header>{landingText.heading}</Header>
				<SubHeader>{landingText.subHeading}</SubHeader>
			</TextContainer>
			<ButtonContainer>
				<Link href="/contact">
					<Button>Book a Consultation</Button>
				</Link>
			</ButtonContainer>
		</Container>
	)
}

export default HomeImageText
