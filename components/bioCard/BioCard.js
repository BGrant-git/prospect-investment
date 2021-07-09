import { useContext, useEffect } from 'react'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import ScrollAnimateWrapper from '../framerWrappers/ScrollAnimateWrapper'

import { StoreContext } from '../../context/context'
import {
	StyledP,
	Container,
	ImageWrapper,
	StyledImg,
	TextWrapper,
	TitleWrapper,
} from './bioCardStyles'

const bioCard = ({ name, position, bioText, img }) => {
	const { matchesMd } = useContext(StoreContext)
	const { framerUpVariants } = useContext(StoreContext)

	return (
		<ScrollAnimateWrapper variants={framerUpVariants}>
			<Container>
				<ImageWrapper>
					<StyledImg src={img} alt="" />
					<TitleWrapper border={matchesMd ? 'solid' : 'none'}>
						<h1>{name.toUpperCase()}</h1>
						<h2>{position}</h2>
					</TitleWrapper>
				</ImageWrapper>

				<TextWrapper>
					{bioText.map((item, i) => (
						<StyledP key={i}>{item}</StyledP>
					))}
				</TextWrapper>
			</Container>
		</ScrollAnimateWrapper>
	)
}

export default bioCard
