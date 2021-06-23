import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/projectComponent/ProjectComponent'

import { StoreContext, CenterRule } from '../context/context'
import {
	Container,
	Title,
	SubTitle,
} from '../components/pages-styles/projectsStyles'

const Projects = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			initial={transitionVariants.initial}
			animate={transitionVariants.animate}
			key="projects"
		>
			<Container>
				<Title>Projects</Title>
				<CenterRule />
				<SubTitle>Completed</SubTitle>
				<ProjectComponent />
			</Container>
		</motion.div>
	)
}

export default Projects
