import { useContext } from 'react'
import Image from 'next/image'

import ScrollAnimateWrapper from '../framerWrappers/ScrollAnimateWrapper'
import { framerMotionVariants } from '../../store/framerMotionVariants'

import { StoreContext } from '../../store/context'
import {
	StyledP,
	Container,
	ImageWrapper,
	StyledImg,
	TextWrapper,
	TitleWrapper,
} from './bioCardStyles'

const BioCard = ({ name, position, bioText, img }) => {
	const { matchesMd } = useContext(StoreContext)

	return (
		<ScrollAnimateWrapper variants={framerMotionVariants.slideUp}>
			<Container>
				<ImageWrapper>
					<StyledImg>
						<Image
							src={img}
							className="bioPics"
							alt=""
							width={200}
							height={200}
						/>
					</StyledImg>
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

export default BioCard
