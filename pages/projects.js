import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/projectComponent/ProjectComponent'
import StaggerAnimateWrapper from '../components/framerWrappers/StaggerAnimateWrapper'

import { StoreContext, CenterRule } from '../store/context'
import {
	Container,
	ProjectsWrapper,
	StyledH1,
} from '../store/pages-styles/projectsStyles'
import { projectsShortData } from '../public/text-files/projectsText'

const Projects = () => {
	const { framerStaggerVariants } = useContext(StoreContext)

	return (
		<Container>
			<StyledH1>Projects</StyledH1>
			<CenterRule background="white" />
			<StaggerAnimateWrapper variant={framerStaggerVariants.container}>
				<ProjectsWrapper>
					{projectsShortData.map((item, i) => (
						<motion.div variants={framerStaggerVariants.item} key={i}>
							<ProjectComponent
								title={item.title}
								area={item.area}
								status={item.status}
								description={item.description}
								gdv={item.gdv}
								img={item.img}
							/>
						</motion.div>
					))}
				</ProjectsWrapper>
			</StaggerAnimateWrapper>
		</Container>
	)
}

export default Projects
