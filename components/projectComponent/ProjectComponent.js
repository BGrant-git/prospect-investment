import { useContext } from 'react'

import { StoreContext, LeftRule, CenterRule } from '../../store/context'
import {
	ButtonWrapper,
	Container,
	StyledImg,
	TextWrapper,
} from './projectComponentStyles'

const ProjectComponent = ({ title, area, status, description, gdv, img }) => {
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
				<p>{description}</p>
				<ButtonWrapper>
					<p>GDV: {gdv}</p>
					<p>
						<a>More info ➤ </a>
					</p>
				</ButtonWrapper>
			</TextWrapper>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectComponent
