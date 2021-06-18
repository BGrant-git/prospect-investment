import { useContext, useEffect } from 'react'
import HomepageProjectItem from '../homepageProjectItem/HomepageProjectItem'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StoreContext } from '../../context/context'

import {
	Container,
	ProjectsContainer,
	Title,
	Rule,
} from './homepageProjectsStyles'
import { projectsData } from '../../public/text-files/homepageText'

const HomepageProjects = () => {
	const { framerUpVariants } = useContext(StoreContext)
	const controls = useAnimation()

	const { ref, inView } = useInView({ threshold: 0.2 })

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
				<Title>
					<h1>Featured Projects:</h1>
				</Title>
				<Rule />
				<ProjectsContainer>
					{projectsData.map((item, i) => (
						<HomepageProjectItem
							date={item.date}
							title={item.title}
							text={item.text}
							img={item.img}
							link={item.link}
							key={i}
						/>
					))}
				</ProjectsContainer>
			</Container>
		</motion.div>
	)
}

export default HomepageProjects
