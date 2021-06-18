import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { StoreContext } from '../context/context'
import ProjectsComponent from '../components/projectsComponent/ProjectsComponent'

const Projects = () => {
	const { transVariants } = useContext(StoreContext)

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={transVariants.initial}
				animate={transVariants.animate}
			>
				<ProjectsComponent />
			</motion.div>
		</AnimatePresence>
	)
}

export default Projects
