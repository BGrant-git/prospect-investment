import Link from 'next/link'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@material-ui/core'

import { StoreContext } from '../../context/context'
import { landingText } from '../../public/text-files/homepageText'

import {
	Container,
	TextWrapper,
	StyledH1,
	StyledH2,
	muiButtonStyle,
} from './homeImageTextStyles'

const HomeImageText = () => {
	const { framerLeftSlideVariants, matchesSm } = useContext(StoreContext)
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

				<div>
					<Link href="/contact">
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
