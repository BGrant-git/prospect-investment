import Link from 'next/link'
import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'
import { landingText } from '../../public/text-files/homepageText'

import {
	Container,
	TextWrapper,
	Button,
	ButtonWrapper,
	StyledH1,
	StyledH2,
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
				<TextWrapper>
					<StyledH1>{landingText.heading}</StyledH1>
					<StyledH2>{landingText.subHeading}</StyledH2>
				</TextWrapper>

				<ButtonWrapper>
					<Link href="/contact">
						<Button>Book a Consultation</Button>
					</Link>
				</ButtonWrapper>
			</Container>
		</motion.div>
	)
}

export default HomeImageText
