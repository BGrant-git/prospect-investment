import Link from 'next/link'
import { Button } from '@mui/material'

import {
	Container,
	StyledImg,
	TextWrapper,
	buttonStyle,
} from './homepageProjectItemStyles'

const HomepageProjectItem = ({ date, title, text, img, link }) => {
	return (
		<Container>
			<StyledImg src={img} alt="" />
			<TextWrapper>
				<p>{date}</p>
				<h1>{title.toUpperCase()}</h1>

				{text.map((item, i) => (
					<p key={i}>{item}</p>
				))}
				<Button variant="contained" type="submit" style={buttonStyle}>
					<Link href={link} as={link}>
						see project
					</Link>
				</Button>
			</TextWrapper>
		</Container>
	)
}

export default HomepageProjectItem
