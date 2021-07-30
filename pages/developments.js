import { useContext } from 'react'
import { motion } from 'framer-motion'

import ProjectComponent from '../components/developmentsComponent/DevelopmentsComponent'
import StaggerAnimateWrapper from '../components/framerWrappers/StaggerAnimateWrapper'

import { StoreContext, CenterRule } from '../store/context'
import {
	Container,
	ProjectsWrapper,
	StyledH1,
} from '../store/pages-styles/developmentsStyles'
import { projectsShortData } from '../public/text-files/projectsText'

const Developments = () => {
	const { transitionVariants, framerStaggerVariants } = useContext(StoreContext)

	return (
		<motion.div
			variants={transitionVariants}
			initial="initial"
			animate="animate"
		>
			<Container>
				<StyledH1>DEVELOPMENTS</StyledH1>
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
		</motion.div>
	)
}

export default Developments
