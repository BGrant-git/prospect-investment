import BioCard from '../bioCard/BioCard'
import { Grid } from '@material-ui/core'

import { Container, StyledH1 } from './bioSectionStyles'
import { bioData } from '../../public/text-files/aboutText'
import { CenterRule } from '../../store/context'

const BioSection = () => {
	return (
		<Container>
			<StyledH1>The Team</StyledH1>
			<CenterRule background="white" />
			<Grid container>
				{bioData.map((item, i) => (
					<Grid item xs={12} md={6} key={i}>
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
