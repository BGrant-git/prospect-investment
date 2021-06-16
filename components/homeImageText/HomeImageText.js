import Link from 'next/link'
import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'
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
	const { framerLeftSlideVariants } = useContext(StoreContext)
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={framerLeftSlideVariants}
		>
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
		</motion.div>
	)
}

export default HomeImageText
