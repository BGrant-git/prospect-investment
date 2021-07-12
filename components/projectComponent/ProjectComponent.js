import {
	Container,
	StyledH1,
	StyledImg,
	TextWrapper,
	StyledP,
	StyledUl,
	LeftRuleStyled,
} from './projectComponentStyles'

const ProjectComponent = ({ title, text, img }) => {
	return (
		<Container>
			<TextWrapper>
				<StyledH1>{title}</StyledH1>
				<LeftRuleStyled background="var(--main-dark)" />
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
