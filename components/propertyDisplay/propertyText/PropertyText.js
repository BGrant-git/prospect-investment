import { Grid } from '@material-ui/core'
import styled from 'styled-components'

import { projectsDataLong } from '../../../public/text-files/projectsText'

export const TextWrapper = styled.div`
	margin: 0 20px;

	p,
	li {
		font-size: 20px;
	}
`

const PropertyText = (props) => {
	const text = projectsDataLong.bakerRoad.groundFloor.text

	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<TextWrapper>
					<p>{props.desc}</p>
					<ul>
						<h2>Key Features:</h2>
						{props.keyFeatures.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</TextWrapper>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextWrapper>
					<p>{props.location}</p>
				</TextWrapper>
			</Grid>
		</Grid>
	)
}

export default PropertyText
