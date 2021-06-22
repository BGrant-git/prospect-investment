import BioCard from '../bioCard/BioCard'
import { Grid } from '@material-ui/core'

import CopyComponent from '../copyComponent/CopyComponent'
import {
	Container,
	Title,
	TitleContainer,
	CenterRule,
} from './bioSectionStyles'
import { bioData } from '../../public/text-files/aboutText'

const BioSection = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>WHO WE ARE</Title>
				<CenterRule />
			</TitleContainer>

			<CopyComponent />

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
