import { useContext } from 'react'
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
import {
	StoreContext,
	LeftRule,
	RightRule,
	CenterRule,
} from '../../store/context'
import Image from 'next/image'

const AboutCopy = () => {
	const { matchesSm } = useContext(StoreContext)

	return (
		<div>
			<AnimateWrapper variants={framerMotionVariants.slideLeft}>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						{matchesSm ? (
							<LeftRule background="var(--main-dark)" />
						) : (
							<CenterRule background="var(--main-dark)" />
						)}
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
					<TextWrapper
						style={matchesSm ? { textAlign: 'right' } : { textAlign: 'center' }}
					>
						<h2>{aboutPageCopy[1].heading}</h2>
						{matchesSm ? (
							<RightRule background="var(--main-dark)" />
						) : (
							<CenterRule background="var(--main-dark)" />
						)}
						<StyledP>{aboutPageCopy[1].text}</StyledP>
					</TextWrapper>
				</RowWrapper>
			</AnimateWrapper>
		</div>
	)
}

export default AboutCopy
