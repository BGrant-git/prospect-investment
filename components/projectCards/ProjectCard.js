import { useContext } from 'react'

import { StoreContext, LeftRule, CenterRule } from '../../store/context'
import {
	ButtonWrapper,
	Container,
	StyledImg,
	TextWrapper,
} from './projectCardStyles'

const ProjectCard = ({ title, area, status, description, gdv, img }) => {
	const { matchesSm } = useContext(StoreContext)

	return (
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
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectCard
