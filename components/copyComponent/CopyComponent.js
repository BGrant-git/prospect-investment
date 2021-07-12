import { useContext } from 'react'

import AnimateWrapper from '../framerWrappers/AnimateWrapper'
import { StoreContext } from '../../store/context'
import { aboutPageCopy } from '../../public/text-files/aboutText'

import {
	RowWrapper,
	TextWrapper,
	StyledP,
	StyledImgLeft,
	StyledImgRight,
} from './copyComponentStyles'
import { LeftRule, RightRule } from '../../store/context'

const CopyComponent = () => {
	const { framerLeftSlideVariants, framerRightSlideVariants } =
		useContext(StoreContext)

	return (
		<>
			<AnimateWrapper variants={framerLeftSlideVariants}>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule background="black" />
						<StyledP>{aboutPageCopy[0].text}</StyledP>
					</TextWrapper>
					<StyledImgLeft src={aboutPageCopy[0].img} alt="" />
				</RowWrapper>
			</AnimateWrapper>
			<AnimateWrapper variants={framerRightSlideVariants}>
				<RowWrapper>
					<StyledImgRight src={aboutPageCopy[1].img} alt="" />
					<TextWrapper style={{ textAlign: 'right' }}>
						<h2>{aboutPageCopy[1].heading}</h2>
						<RightRule background="black" />
						<StyledP>{aboutPageCopy[1].text}</StyledP>
					</TextWrapper>
				</RowWrapper>
			</AnimateWrapper>
		</>
	)
}

export default CopyComponent
