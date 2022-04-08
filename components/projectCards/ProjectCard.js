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

const ProjectCard = ({ title, location, status, description, img, id }) => {
	const { matchesSm } = useContext(StoreContext)

	return (
		<Link passHref href={`/developments/${id}`}>
			<Container>
				<TextWrapper>
					<h1>{title}</h1>
					<h3>{location}</h3>
					{matchesSm ? (
						<LeftRule background="var(--main-dark)" />
					) : (
						<CenterRule background="var(--main-dark)" />
					)}
					<h3>{status ? 'Completed' : 'In Progress'}</h3>
					<p style={{ minHeight: '120px' }}>{description}</p>
					<ButtonWrapper>
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
