import { motion } from 'framer-motion'
import { useContext } from 'react'

import {
	Container,
	Title,
	StyledImg,
	TextContainer,
	StyledP,
} from './projectComponentStyles'
import { LeftRule, StoreContext } from '../../context/context'

const ProjectComponent = ({ title, text, img }) => {
	const { framerLeftSlideVariants } = useContext(StoreContext)
	return (
		<Container>
			<TextContainer>
				<Title>{title}</Title>
				<LeftRule />
				<StyledP>{text}</StyledP>
			</TextContainer>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectComponent
