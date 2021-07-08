import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/projectComponent/ProjectComponent'
import UpAnimateWrapper from '../components/framerWrappers/UpAnimateWrapper'
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
			<StyledH1>Projectsssss</StyledH1>
			<CenterRule />
			<StyledH2>Completed</StyledH2>
			<CenterRule style={ruleStyle} />
			<motion.div
				initial="hidden"
				animate="show"
				variants={framerStaggerVariants.container}
			>
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
			</motion.div>

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
