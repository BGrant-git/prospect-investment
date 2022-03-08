import AnimateWrapper from '../framerWrappers/AnimateWrapper'
import { framerMotionVariants } from '../../store/framerMotionVariants'
import { aboutPageCopy } from '../../public/text-files/aboutText'

import {
	RowWrapper,
	TextWrapper,
	StyledP,
	StyledImgLeftWrapper,
	StyledImgRightWrapper,
} from './aboutCopyStyles'
import { LeftRule, RightRule } from '../../store/context'
import Image from 'next/image'

const AboutCopy = () => {
	return (
		<div>
			<AnimateWrapper variants={framerMotionVariants.slideLeft}>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule background="var(--main-dark)" />
						<StyledP>{aboutPageCopy[0].text}</StyledP>
					</TextWrapper>
					<StyledImgLeftWrapper>
						<Image src={aboutPageCopy[0].img} alt="" />
					</StyledImgLeftWrapper>
				</RowWrapper>
			</AnimateWrapper>
			<AnimateWrapper variants={framerMotionVariants.slideRight}>
				<RowWrapper>
					<StyledImgRightWrapper>
						<Image src={aboutPageCopy[1].img} alt="" />
					</StyledImgRightWrapper>
					<TextWrapper style={{ textAlign: 'right' }}>
						<h2>{aboutPageCopy[1].heading}</h2>
						<RightRule background="var(--main-dark)" />
						<StyledP>{aboutPageCopy[1].text}</StyledP>
					</TextWrapper>
				</RowWrapper>
			</AnimateWrapper>
		</div>
	)
}

export default AboutCopy
