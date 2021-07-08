import { useContext } from 'react'
import { motion } from 'framer-motion'

import LeftAnimateWrapper from '../framerWrappers/LeftAnimateWrapper'
import RightAnimateWrapper from '../framerWrappers/RightAnimateWrapper'
import { StoreContext } from '../../context/context'
import { aboutPageCopy } from '../../public/text-files/aboutText'

import {
	RowWrapper,
	TextWrapper,
	StyledP,
	StyledImgLeft,
	StyledImgRight,
} from './copyComponentStyles'
import { LeftRule, RightRule } from '../../context/context'

const CopyComponent = () => {
	const { framerLeftSlideVariants, framerRightSlideVariants } =
		useContext(StoreContext)

	return (
		<>
			<LeftAnimateWrapper>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule />
						<StyledP>{aboutPageCopy[0].text}</StyledP>
					</TextWrapper>
					<StyledImgLeft src={aboutPageCopy[0].img} alt="" />
				</RowWrapper>
			</LeftAnimateWrapper>
			<RightAnimateWrapper
				initial="hidden"
				animate="visible"
				variants={framerRightSlideVariants}
			>
				<RowWrapper>
					<StyledImgRight src={aboutPageCopy[1].img} alt="" />
					<TextWrapper style={{ textAlign: 'right' }}>
						<h2>{aboutPageCopy[1].heading}</h2>
						<RightRule />
						<StyledP>{aboutPageCopy[1].text}</StyledP>
					</TextWrapper>
				</RowWrapper>
			</RightAnimateWrapper>
		</>
	)
}

export default CopyComponent
