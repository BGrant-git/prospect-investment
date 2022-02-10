import HomepageProjectItem from '../homepageProjectItem/HomepageProjectItem'
import ScrollAnimateWrapper from '../framerWrappers/ScrollAnimateWrapper'

import { framerMotionVariants } from '../../store/framerMotionVariants'
import {
	Container,
	ProjectsWrapper,
	TitleWrapper,
	Rule,
} from './homepageProjectsStyles'
import { projectsData } from '../../public/text-files/homepageText'

const HomepageProjects = () => {
	return (
		<ScrollAnimateWrapper variants={framerMotionVariants.slideUp}>
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
