import Link from 'next/link'
import { useContext } from 'react'
import { Button } from '@material-ui/core'

import AnimateWrapper from '../framerWrappers/AnimateWrapper'

import { StoreContext } from '../../store/context'
import { landingText } from '../../public/text-files/homepageText'

import {
	Container,
	TextWrapper,
	StyledH1,
	StyledH2,
	muiButtonStyle,
} from './homeImageTextStyles'

const HomeImageText = () => {
	const { framerLeftSlideVariants } = useContext(StoreContext)
	return (
		<AnimateWrapper variants={framerLeftSlideVariants}>
			<Container>
				<TextWrapper>
					<StyledH1>{landingText.heading}</StyledH1>
					<StyledH2>{landingText.subHeading}</StyledH2>
				</TextWrapper>

				<div>
					<Link href="/contact" as="/contact">
						<Button variant="contained" style={muiButtonStyle}>
							contact us
						</Button>
					</Link>
				</div>
			</Container>
		</AnimateWrapper>
	)
}

export default HomeImageText
