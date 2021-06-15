import {
	Container,
	ImageStyle,
	ProjectButton,
	TextContainer,
} from './homepageProjectItemStyles'

const HomepageProjectItem = ({ date, title, text, img, link }) => {
	return (
		<Container>
			<ImageStyle src={img} alt="" />
			<TextContainer>
				<p>{date}</p>
				<h1>{title.toUpperCase()}</h1>

				{text.map((item, i) => (
					<p key={i}>{item}</p>
				))}
				<ProjectButton>
					<a href={link}>View project</a>
				</ProjectButton>
			</TextContainer>
		</Container>
	)
}

export default HomepageProjectItem
