import {
	BioTextStyles,
	Container,
	ImageContainer,
	ImageStyles,
	TextContainer,
	Title,
} from './bioCardStyles'

const bioCard = ({ name, position, bioText, img }) => {
	return (
		<Container>
			<ImageContainer>
				<ImageStyles src={img} alt="" />
				<Title>
					<h1>{name}</h1>
					<h2>{position}</h2>
				</Title>
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
