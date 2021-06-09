import Link from 'next/link'

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
				<Header>West London property investment and development</Header>
				<SubHeader>
					Potentially a bit more copy here, can say anything Lorem, ipsum dolor
					sit amet consectetur adipisicing elit.
				</SubHeader>
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
