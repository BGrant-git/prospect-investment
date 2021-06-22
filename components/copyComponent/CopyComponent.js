import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'
import { aboutPageCopy, bioData } from '../../public/text-files/aboutText'

import {
	RowStyle,
	TextContainer,
	Text,
	ImgStyle,
	LeftRule,
	RightRule,
} from './copyComponentStyles'

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
				<RowStyle>
					<TextContainer>
						<h2>{aboutPageCopy[0].heading}</h2>
						<LeftRule />
						<Text>{aboutPageCopy[0].text}</Text>
					</TextContainer>
					<ImgStyle src={aboutPageCopy[0].img} alt="" />
				</RowStyle>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={framerRightSlideVariants}
			>
				<RowStyle>
					<ImgStyle src={aboutPageCopy[1].img} alt="" />
					<TextContainer style={{ textAlign: 'right' }}>
						<h2>{aboutPageCopy[1].heading}</h2>
						<RightRule />
						<Text>{aboutPageCopy[1].text}</Text>
					</TextContainer>
				</RowStyle>
			</motion.div>
		</>
	)
}

export default CopyComponent
