import { useContext } from 'react'

import HomepageProjectItem from '../homepageProjectItem/HomepageProjectItem'
import ScrollAnimateWrapper from '../framerWrappers/ScrollAnimateWrapper'

import { StoreContext } from '../../store/context'
import {
	Container,
	ProjectsWrapper,
	TitleWrapper,
	Rule,
} from './homepageProjectsStyles'
import { projectsData } from '../../public/text-files/homepageText'

const HomepageProjects = () => {
	const { framerUpVariants } = useContext(StoreContext)

	return (
		<ScrollAnimateWrapper variants={framerUpVariants}>
			<Container>
				<TitleWrapper>
					<h1>Featured Projects:</h1>
				</TitleWrapper>
				<Rule />
				<ProjectsWrapper>
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
				</ProjectsWrapper>
			</Container>
		</ScrollAnimateWrapper>
	)
}

export default HomepageProjects
