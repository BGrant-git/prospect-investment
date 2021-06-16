import BioCard from '../bioCard/BioCard'
import { Grid, Card } from '@material-ui/core'

import {
	Container,
	CopySectionStyles,
	CopyText,
	Title,
	TitleContainer,
} from './bioSectionStyles'
import { aboutPageCopy, bioData } from '../../public/text-files/aboutText'

const BioSection = () => {
	return (
		<Container>
			<TitleContainer>
				<Title>WHO WE ARE</Title>
			</TitleContainer>

			<CopySectionStyles>
				<CopyText>{aboutPageCopy}</CopyText>
			</CopySectionStyles>

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
