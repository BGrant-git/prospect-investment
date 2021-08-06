import DevelopmentComponent from '../../components/developmentComponent/DevelopmentComponent'
import {
	ButtonWrapper,
	Container,
	TitleWrapper,
} from '../../store/pages-styles/projectDisplayStyles'

// things i know will repeat:
// floor plan, energy rating
// landing section (big image with small shite underneath yes)
// key features
// within text might be that description and location can be separated
import { projectsDataLong } from '../../public/text-files/projectsText'

const ProjectDisplay = ({ projectIds }) => {
	return (
		<Container>
			<TitleWrapper></TitleWrapper>
			<ButtonWrapper>
				{projectsIds.map((item, i) => (
					<div key={i}>
						<a href={item[0]}>{item[1]}</a>
					</div>
				))}
			</ButtonWrapper>
		</Container>
	)
}

export default ProjectDisplay
