import { useContext, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { StoreContext } from '../../context/context'
import {
	BioTextStyles,
	Container,
	ImageContainer,
	ImageStyles,
	TextContainer,
	TitleContainer,
} from './bioCardStyles'

const bioCard = ({ name, position, bioText, img }) => {
	const { matchesMd } = useContext(StoreContext)
	const { framerUpVariants } = useContext(StoreContext)
	const controls = useAnimation()
	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={framerUpVariants}
		>
			<Container>
				<ImageContainer>
					<ImageStyles src={img} alt="" />
					<TitleContainer border={matchesMd ? 'solid' : 'none'}>
						<h1>{name.toUpperCase()}</h1>
						<h2>{position}</h2>
					</TitleContainer>
				</ImageContainer>

				<TextContainer>
					{bioText.map((item, i) => (
						<BioTextStyles key={i}>{item}</BioTextStyles>
					))}
				</TextContainer>
			</Container>
		</motion.div>
	)
}

export default bioCard
