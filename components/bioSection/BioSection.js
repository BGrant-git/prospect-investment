import BioCard from '../bioCard/BioCard'
import { Grid } from '@material-ui/core'

import { Container, Title } from './bioSectionStyles'
import { bioData } from '../../public/text-files/aboutText'
import { CenterRule } from '../../context/context'

const BioSection = () => {
	return (
		<Container>
			<Title>The Team</Title>
			<CenterRule />
			<Grid container>
				{bioData.map((item, i) => (
					<Grid item xs={12} key={i}>
						<BioCard
							name={item.name}
							position={item.position}
							bioText={item.bioText}
							img={item.img}
							alignRight={item.alignRight}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default BioSection
