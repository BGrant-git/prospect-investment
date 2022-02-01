import { useContext } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

import ProjectComponent from '../../components/projectCards/ProjectCard'
import StaggerAnimateWrapper from '../../components/framerWrappers/StaggerAnimateWrapper'

import { StoreContext, CenterRule } from '../../store/context'
import {
	Container,
	ProjectsWrapper,
	StyledH1,
} from '../../pages/pages-styles/developmentsStyles/developmentsStyles'
import { projectsDataShort } from '../../public/text-files/projectsText'

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
						{projectsDataShort.map((item, i) => (
							<motion.div variants={framerStaggerVariants.item} key={i}>
								<Link href={`/developments/${item.id}`}>
									<a>
										<ProjectComponent
											title={item.title}
											area={item.area}
											status={item.status}
											description={item.description}
											gdv={item.gdv}
											img={item.img}
										/>
									</a>
								</Link>
							</motion.div>
						))}
					</ProjectsWrapper>
				</StaggerAnimateWrapper>
			</Container>
		</motion.div>
	)
}

export default Developments
