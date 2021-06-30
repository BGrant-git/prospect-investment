import { useContext } from 'react'
import { motion } from 'framer-motion'

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
			<motion.div
				initial="hidden"
				animate="visible"
				variants={framerLeftSlideVariants}
			>
				<RowWrapper>
					<TextWrapper>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule />
						<StyledP>{aboutPageCopy[0].text}</StyledP>
					</TextWrapper>
					<StyledImgLeft src={aboutPageCopy[0].img} alt="" />
				</RowWrapper>
			</motion.div>
			<motion.div
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
			</motion.div>
		</>
	)
}

export default CopyComponent
