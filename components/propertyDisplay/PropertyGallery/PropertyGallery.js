import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { Grid } from '@material-ui/core'

import { StyledThumb, ImgWrapper } from './propertyGalleryStyles'

const PropertyGallery = (images) => {
	return (
		<>
			<SRLWrapper>
				<Grid container justify="center">
					{images.images.map((item, i) => (
						<Grid item xs={6} key={i}>
							<a href={item}>
								<ImgWrapper>
									<StyledThumb src={item} alt="" />
								</ImgWrapper>
							</a>
						</Grid>
					))}
				</Grid>
			</SRLWrapper>
		</>
	)
}

export default PropertyGallery
