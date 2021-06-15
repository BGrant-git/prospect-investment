import { useContext } from 'react'
import { StoreContext } from '../../context/context'
import {
	Container,
	ImageStyle,
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
				<a href={link}>View project</a>
			</TextContainer>
		</Container>
	)
}

export default HomepageProjectItem
