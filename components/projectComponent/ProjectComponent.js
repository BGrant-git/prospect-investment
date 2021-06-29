import {
	Container,
	Title,
	StyledImg,
	TextContainer,
	StyledP,
	StyledUl,
} from './projectComponentStyles'
import { LeftRule } from '../../context/context'

const ProjectComponent = ({ title, text, img }) => {
	return (
		<Container>
			<TextContainer>
				<Title>{title}</Title>
				<LeftRule />
				<StyledUl>
					{text.map((item, i) => (
						<li key={i}>
							<StyledP>{item}</StyledP>
						</li>
					))}
				</StyledUl>
			</TextContainer>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectComponent
