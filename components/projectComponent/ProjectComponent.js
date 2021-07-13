import { LeftRule } from '../../store/context'
import { Container, StyledImg, TextWrapper } from './projectComponentStyles'

const ProjectComponent = ({ title, area, status, description, gdv, img }) => {
	return (
		<Container>
			<TextWrapper>
				<h1>{title}</h1>

				<h3>{area}</h3>
				<LeftRule background="var(--main-dark)" />
				<h3>{status}</h3>
				<p>{description}</p>
				<p>GDV: {gdv}</p>
			</TextWrapper>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectComponent
