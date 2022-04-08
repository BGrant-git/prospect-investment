import { useState } from 'react'
import { CenterRule } from '../../store/context'

import { projectsDataLong } from '../../public/text-files/projectsText'
import {
	ButtonDiv,
	Container,
	DescWrapper,
	IndexButtonWrapper,
	TitleWrapper,
	ButtonWrapper,
} from '../../public/styles/pages-styles/developmentsStyles/bakerRoadStyles'

import PropertyDisplay from '../../components/propertyDisplay/PropertyDisplayComponent/PropertyDisplay'

const data = projectsDataLong.bakerRoad

const BakerRoad = () => {
	const [property, setProperty] = useState('groundFloor')
	const [activeButton, setActiveButton] = useState(0)

	const handleButton = (propertyName, index) => {
		setProperty(propertyName[0])
		setActiveButton(index)
	}

	return (
		// <Container>
		// 	<TitleWrapper>
		// 		<h1>{data.title}</h1>
		// 		<h2>{data.area}</h2>
		// 		<CenterRule background={'var(--main-dark)'} />
		// 	</TitleWrapper>
		// 	<DescWrapper>
		// 		<h2>{data.description}</h2>
		// 	</DescWrapper>

		// 	<IndexButtonWrapper>
		// 		<h2>Select Property:</h2>
		// 		<ButtonWrapper>
		// 			{data.projectIds.map((item, i) => (
		// 				<ButtonDiv
		// 					key={i}
		// 					style={i === activeButton ? { backgroundColor: 'red' } : null}
		// 					onClick={() => handleButton(item, i)}
		// 				>
		// 					{item[1]}
		// 				</ButtonDiv>
		// 			))}
		// 		</ButtonWrapper>
		// 	</IndexButtonWrapper>
		// 	<PropertyDisplay propertyData={projectsDataLong.bakerRoad[property]} />
		// </Container>
		<>hello</>
	)
}

export default BakerRoad
