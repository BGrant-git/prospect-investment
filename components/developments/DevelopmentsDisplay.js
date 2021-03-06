import { useContext } from 'react'
import { StoreContext } from '../../store/context'

import {
	Container,
	TitleWrapper,
	DescWrapper,
	IndexButtonWrapper,
	ButtonWrapper,
	ButtonDiv,
} from '../../public/styles/pages-styles/developmentsStyles/bakerRoadStyles'

const DevelopmentsDisplay = (
	title,
	area,
	description,
	projectIds,
	projectsDataLong,
	property,
	PropertyDisplay
) => {
	const { CenterRule } = useContext(StoreContext)

	return (
		<Container>
			<TitleWrapper>
				<h1>{title}</h1>
				<h2>{area}</h2>
				<CenterRule background={'var(--main-dark)'} />
			</TitleWrapper>
			<DescWrapper>
				<h2>{description}</h2>
			</DescWrapper>

			<IndexButtonWrapper>
				<h2>Select Property:</h2>
				<ButtonWrapper>
					{projectIds.map((item, i) => (
						<ButtonDiv
							key={i}
							style={i === activeButton ? { backgroundColor: 'red' } : null}
							onClick={() => handleButton(item, i)}
						>
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

export default DevelopmentsDisplay
