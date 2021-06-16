import Link from 'next/link'
import { Grid } from '@material-ui/core'
import { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { StoreContext } from '../../context/context'
import { cardData } from '../../public/text-files/homepageText'
import {
	Container,
	CardContainer,
	CardImg,
	CardText,
} from './HomepageCardsStyles'

const CardComponent = ({ text, img }) => {
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
	const { framerUpVariants } = useContext(StoreContext)
	const controls = useAnimation()

	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<motion.div
			ref={ref}
			initial="hidden"
			animate={controls}
			variants={framerUpVariants}
		>
			<Container>
				<Grid container>
					{cardData.map((item, i) => (
						<Link href={item.link} key={i}>
							<Grid item xs={6} md={3}>
								<CardComponent text={item.text} img={item.img} />
							</Grid>
						</Link>
					))}
				</Grid>
			</Container>
		</motion.div>
	)
}

export default HomepageCards
