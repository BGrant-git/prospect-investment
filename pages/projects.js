import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/projectComponent/ProjectComponent'

import { StoreContext, CenterRule } from '../context/context'
import {
	Container,
	Title,
	SubTitle,
} from '../components/pages-styles/projectsStyles'
import { projectsLinks } from '../public/text-files/projectsText'

const completedLinks = projectsLinks[0]
const inProgressLinks = projectsLinks[1]

const Projects = () => {
	const { transitionVariants, framerStaggerVariants } = useContext(StoreContext)
	const ruleStyle = { marginTop: '-10px', width: '20px' }

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={transitionVariants}
			key="projects"
		>
			<Container>
				<Title>Projects</Title>
				<CenterRule />
				<SubTitle>Completed</SubTitle>
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

				<SubTitle>In Progress</SubTitle>
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
		</motion.div>
	)
}

export default Projects
