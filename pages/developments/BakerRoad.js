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
} from '../../store/pages-styles/developmentsStyles/bakerRoadStyles'

import PropertyDisplay from '../../components/propertyDisplay/PropertyDisplayComponent/PropertyDisplay'

const data = projectsDataLong.bakerRoad

const BakerRoad = () => {
	const [property, setProperty] = useState('groundFloor')

	const handleButton = (e) => {
		setProperty(e[0])
	}

	return (
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
				<h2>Select Property:</h2>
				<ButtonWrapper>
					{data.projectIds.map((item, i) => (
						<ButtonDiv key={i} onClick={() => handleButton(item)}>
							{item[1]}
							{console.log(property)}
						</ButtonDiv>
					))}
				</ButtonWrapper>
			</IndexButtonWrapper>
			<PropertyDisplay propertyData={projectsDataLong.bakerRoad[property]} />
		</Container>
	)
}

export default BakerRoad
