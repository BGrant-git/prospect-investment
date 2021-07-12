import {
	Container,
	StyledH1,
	StyledImg,
	TextWrapper,
	StyledP,
	StyledUl,
} from './projectComponentStyles'
import { LeftRule } from '../../store/context'

const ProjectComponent = ({ title, text, img }) => {
	return (
		<Container>
			<TextWrapper>
				<StyledH1>{title}</StyledH1>
				<LeftRule style={{ backgroundColor: 'black' }} />
				<StyledUl>
					{text.map((item, i) => (
						<li key={i}>
							<StyledP>{item}</StyledP>
						</li>
					))}
				</StyledUl>
			</TextWrapper>
			<StyledImg src={img} alt="" />
		</Container>
	)
}

export default ProjectComponent
