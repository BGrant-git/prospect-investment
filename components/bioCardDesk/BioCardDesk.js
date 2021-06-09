import {
	BioTextStyles,
	Container,
	ImageContainer,
	ImageStyles,
	TextContainer,
} from './bioCardDeskStyles'

const BioCardDesk = ({ name, position, bioText, img, alignRight }) => {
	return (
		<Container align={alignRight ? 'right' : 'left'}>
			{!alignRight ? (
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
			{alignRight ? (
				<ImageContainer>
					<ImageStyles src={img} alt="" />
				</ImageContainer>
			) : null}
		</Container>
	)
}

export default BioCardDesk
