import {
	BioTextStyles,
	Container,
	ImageContainer,
	ImageStyles,
	TextContainer,
	TitleContainer,
} from './bioCardStyles'

const bioCard = ({ name, position, bioText, img }) => {
	return (
		<Container>
			<ImageContainer>
				<ImageStyles src={img} alt="" />
				<TitleContainer>
					<h1>{name}</h1>
					<h2>{position}</h2>
				</TitleContainer>
			</ImageContainer>
			<TextContainer>
				{bioText.map((item, i) => (
					<BioTextStyles key={i}>{item}</BioTextStyles>
				))}
			</TextContainer>
		</Container>
	)
}

export default bioCard
