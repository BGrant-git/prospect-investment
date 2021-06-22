import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'
import { aboutPageCopy } from '../../public/text-files/aboutText'

import {
	RowStyle,
	TextContainer,
	Text,
	ImgStyle,
	LeftRule,
	RightRule,
} from './copyComponentStyles'

const copyImg1 = require('../../public/images/about/copyImage2.jpg')
const copyImg2 = require('../../public/images/about/copyImage3.jpg')

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
						<h2>{aboutPageCopy.heading}</h2>
						<LeftRule />
						<Text>{aboutPageCopy.text}</Text>
					</TextContainer>
					<ImgStyle src={copyImg1} alt="" />
				</RowStyle>
			</motion.div>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={framerRightSlideVariants}
			>
				<RowStyle>
					<ImgStyle src={copyImg2} alt="" />
					<TextContainer style={{ textAlign: 'right' }}>
						<h2>{aboutPageCopy.heading}</h2>
						<RightRule />
						<Text>{aboutPageCopy.text}</Text>
					</TextContainer>
				</RowStyle>
			</motion.div>
		</>
	)
}

export default CopyComponent
