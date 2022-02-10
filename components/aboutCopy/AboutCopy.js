import { useContext } from 'react'

import AnimateWrapper from '../framerWrappers/AnimateWrapper'
import { framerMotionVariants } from '../../store/framerMotionVariants'
import { StoreContext } from '../../store/context'
import { aboutPageCopy } from '../../public/text-files/aboutText'

import {
	RowWrapper,
	TextWrapper,
	StyledP,
	StyledImgLeft,
	StyledImgRight,
} from './aboutCopyStyles'
import { LeftRule, RightRule } from '../../store/context'

const AboutCopy = () => {
	const { slideLeft, slideRight } = useContext(StoreContext)

	return (
		<div>
			<AnimateWrapper variants={framerMotionVariants.slideLeft}>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule background="var(--main-dark)" />
						<StyledP>{aboutPageCopy[0].text}</StyledP>
					</TextWrapper>
					<StyledImgLeft src={aboutPageCopy[0].img} alt="" />
				</RowWrapper>
			</AnimateWrapper>
			<AnimateWrapper variants={framerMotionVariants.slideRight}>
				<RowWrapper>
					<StyledImgRight src={aboutPageCopy[1].img} alt="" />
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
