import Link from 'next/link'
import { Button } from '@mui/material'
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
		<Container>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={framerMotionVariants.slideUp}
			>
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
			</motion.div>
		</Container>
	)
}

export default HomeImageText
