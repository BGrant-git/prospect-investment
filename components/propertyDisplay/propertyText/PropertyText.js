import { Grid } from '@mui/material'
import styled from 'styled-components'

import { projectsDataLong } from '../../../public/text-files/projectsText'

export const TextWrapper = styled.div`
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: 0 20px;

	p,
	li {
		font-size: 20px;
	}
`

const PropertyText = (props) => {
	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<TextWrapper>
					<h2>{props.location}</h2>
					<p>{props.desc}</p>
				</TextWrapper>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextWrapper>
					<ul>
						<h2>Key Features:</h2>
						{props.keyFeatures.map((item, i) => (
							<li key={i}>{item.feature}</li>
						))}
					</ul>
				</TextWrapper>
			</Grid>
		</Grid>
	)
}

export default PropertyText
