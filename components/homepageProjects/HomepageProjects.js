import HomepageProjectItem from '../homepageProjectItem/HomepageProjectItem'
import {
	Container,
	ProjectsContainer,
	Title,
	Rule,
} from './homepageProjectsStyles'
import { projectsData } from '../../public/text-files/homepageText'

const HomepageProjects = () => {
	return (
		<Container>
			<Title>
				<h1>Featured Projects:</h1>
			</Title>
			<Rule />
			<ProjectsContainer>
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
			</ProjectsContainer>
		</Container>
	)
}

export default HomepageProjects
