import { CenterRule } from '../../store/context'
import { projectsDataLong } from '../../public/text-files/projectsText'
import {
	Container,
	DescWrapper,
	IndexButtonWrapper,
	TitleWrapper,
} from '../../store/pages-styles/developmentsStyles/bakerRoadStyles'

const data = projectsDataLong.bakerRoad

const BakerRoad = () => {
	return (
		// <Container background={data.groundFloor.heroImg}>
		<Container>
			<TitleWrapper>
				<h1>{data.title}</h1>
				<h2>{data.area}</h2>
				<CenterRule background={'var(--main-dark)'} />
			</TitleWrapper>
			<DescWrapper>
				<h2>{data.description}</h2>
			</DescWrapper>
			<IndexButtonWrapper>
				<h2>Properties:</h2>
				{data.projectIds.map((item, i) => (
					<a href={item[0]} key={i}>
						{item[1]}
					</a>
				))}
			</IndexButtonWrapper>
		</Container>
	)
}

export default BakerRoad
