import { Grid } from '@material-ui/core'

import { projectsDataLong } from '../../../public/text-files/projectsText'
import { Container } from './propertyTextStyles'

const PropertyText = () => {
	const text = projectsDataLong.bakerRoad.groundFloor.text

	return (
		<Grid container>
			<Grid item xs={12} md={6}>
				<Container>
					<p>{text.description}</p>
					<ul>
						<h2>Key Features:</h2>
						{text.keyFeatures.map((item, i) => (
							<li key={i}>{item}</li>
						))}
					</ul>
				</Container>
			</Grid>
			<Grid item xs={12} md={6}>
				<Container>
					<p>{text.location}</p>
				</Container>
			</Grid>
		</Grid>
	)
}

export default PropertyText
