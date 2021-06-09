import {
	BioTextStyles,
	Container,
	ImageContainer,
	ImageStyles,
	TextContainer,
} from './bioCardDeskStyles'

const BioCardDesk = ({ name, position, bioText, img, imgOnRight }) => {
	return (
		<Container align={imgOnRight ? 'right' : 'left'}>
			{!imgOnRight ? (
				<ImageContainer>
					<ImageStyles src={img} alt="" />
				</ImageContainer>
			) : null}
			<TextContainer>
				<h1>{name}</h1>
				<h2>{position}</h2>
				{bioText.map((item, i) => (
					<BioTextStyles key={i}>{item}</BioTextStyles>
				))}
			</TextContainer>
			{imgOnRight ? (
				<ImageContainer>
					<ImageStyles src={img} alt="" />
				</ImageContainer>
			) : null}
		</Container>
	)
}

export default BioCardDesk
