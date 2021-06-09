import Link from 'next/link'
import { Grid } from '@material-ui/core'

import {
	Container,
	CardContainer,
	CardImg,
	CardText,
} from './homepageCardsStyles'

import { cardData } from '../../public/text-files/homepageText'

const Card = ({ text, img }) => {
	return (
		<CardContainer>
			<CardImg src={img} alt="" />
			<CardText>
				<h2>{text}</h2>
			</CardText>
		</CardContainer>
	)
}

const HomepageCards = () => {
	return (
		<Container>
			<Grid container>
				{cardData.map((item, i) => (
					<Link href={item.link}>
						<Grid item xs={6} md={3} key={i}>
							<Card text={item.text} img={item.img} />
						</Grid>
					</Link>
				))}
			</Grid>
		</Container>
	)
}

export default HomepageCards
