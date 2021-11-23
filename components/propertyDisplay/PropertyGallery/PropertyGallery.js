import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { Grid } from '@material-ui/core'

import { projectsDataLong } from '../../../public/text-files/projectsText'

import { StyledThumb, ImgContainer } from './propertyGalleryStyles'

const PropertyGallery = () => {
	const images = projectsDataLong.bakerRoad.groundFloor.images

	return (
		<>
			<SRLWrapper>
				<Grid container justify="center">
					{images.map((item, i) => (
						<Grid item xs={6} key={i}>
							<a href={item}>
								<ImgContainer>
									<StyledThumb src={item} alt="" />
								</ImgContainer>
							</a>
						</Grid>
					))}
				</Grid>
			</SRLWrapper>
		</>
	)
}

export default PropertyGallery
