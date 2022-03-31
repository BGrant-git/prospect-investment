import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { StoreContext, LeftRule, CenterRule } from '../../store/context'
import {
	ButtonWrapper,
	Container,
	StyledImgWrapper,
	TextWrapper,
} from './projectCardStyles'

const ProjectCard = ({ title, area, status, description, gdv, img, id }) => {
	const { matchesSm } = useContext(StoreContext)

	return (
		<Link passHref href={`/developments/${id}`}>
			<Container>
				<TextWrapper>
					<h1>{title}</h1>
					<h3>{area}</h3>
					{matchesSm ? (
						<LeftRule background="var(--main-dark)" />
					) : (
						<CenterRule background="var(--main-dark)" />
					)}
					<h3>{status}</h3>
					<p style={{ minHeight: '120px' }}>{description}</p>
					<ButtonWrapper>
						<p>GDV: {gdv}</p>
						<p>More info ➤</p>
					</ButtonWrapper>
				</TextWrapper>
				<StyledImgWrapper>
					<Image src={img} alt="" layout="fill" />
				</StyledImgWrapper>
			</Container>
		</Link>
	)
}

export default ProjectCard
