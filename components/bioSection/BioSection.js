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
				<svg
					style={{ position: 'absolute' }}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#0099ff"
						fill-opacity="1"
						d="M0,256L120,261.3C240,267,480,277,720,266.7C960,256,1200,224,1320,208L1440,192L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
					></path>
				</svg>
				<Title>WHO WE ARE</Title>
			</TitleContainer>

			<CopySectionStyles>
				<Card>
					<CopyText>{aboutPageCopy}</CopyText>
				</Card>
			</CopySectionStyles>

			<Grid container>
				{bioData.map((item, i) => (
					<Grid item xs={12} sm={6} key={i}>
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
