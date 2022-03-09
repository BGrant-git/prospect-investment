import Link from 'next/link'
import { Button } from '@material-ui/core'
import { motion } from 'framer-motion'

import { framerMotionVariants } from '../../store/framerMotionVariants'
import { landingText } from '../../public/text-files/homepageText'

import {
	Container,
	TextWrapper,
	StyledH1,
	StyledH2,
	muiButtonStyle,
} from './homeImageTextStyles'

const HomeImageText = () => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={framerMotionVariants.slideLeft}
		>
			<Container>
				<TextWrapper>
					<StyledH1>{landingText.heading}</StyledH1>
					<StyledH2>{landingText.subHeading}</StyledH2>
				</TextWrapper>
				<div>
					<Link href="/contact" as="/contact" passHref>
						<Button variant="contained" style={muiButtonStyle}>
							contact us
						</Button>
					</Link>
				</div>
			</Container>
		</motion.div>
	)
}

export default HomeImageText
