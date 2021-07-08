import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/projectComponent/ProjectComponent'
import StaggerAnimateWrapper from '../components/framerWrappers/StaggerAnimateWrapper'

import { StoreContext, CenterRule } from '../context/context'
import {
	Container,
	StyledH1,
	StyledH2,
} from '../components/pages-styles/projectsStyles'
import { projectsLinks } from '../public/text-files/projectsText'

const completedLinks = projectsLinks[0]
const inProgressLinks = projectsLinks[1]

const Projects = () => {
	const { framerStaggerVariants } = useContext(StoreContext)
	const ruleStyle = { marginTop: '-10px', width: '20px' }

	return (
		<Container>
			<StyledH1>Projects</StyledH1>
			<CenterRule />
			<StyledH2>Completed</StyledH2>
			<CenterRule style={ruleStyle} />
			<StaggerAnimateWrapper variant={framerStaggerVariants.container}>
				<>
					{completedLinks.map((item, i) => (
						<motion.div variants={framerStaggerVariants.item} key={i}>
							<ProjectComponent
								title={item.title}
								text={item.text}
								img={item.img}
							/>
						</motion.div>
					))}
				</>
			</StaggerAnimateWrapper>

			<StyledH2>In Progress</StyledH2>
			<CenterRule style={ruleStyle} />
			<>
				{inProgressLinks.map((item, i) => (
					<ProjectComponent
						title={item.title}
						text={item.text}
						img={item.img}
						key={i}
					/>
				))}
			</>
		</Container>
	)
}

export default Projects
