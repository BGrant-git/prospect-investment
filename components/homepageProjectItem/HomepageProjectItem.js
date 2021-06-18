import Link from 'next/link'
import { Button } from '@material-ui/core'

import {
	Container,
	ImageStyle,
	TextContainer,
	buttonStyle,
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
				<Button variant="contained" type="submit" style={buttonStyle}>
					<Link href={link}>view project</Link>
				</Button>
			</TextContainer>
		</Container>
	)
}

export default HomepageProjectItem
