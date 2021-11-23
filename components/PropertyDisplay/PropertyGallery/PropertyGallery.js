import Image from 'next/image'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import { Grid } from '@material-ui/core'

import { projectsDataLong } from '../../../public/text-files/projectsText'

import {
	TextContainer,
	ThumbnailContainer,
	StyledThumb,
	StyledA,
	ImgContainer,
} from './propertyGalleryStyles'

const images = projectsDataLong.bakerRoad.groundFloor.images

console.log(images)

const PropertyGallery = () => {
	return (
		<>
			<SimpleReactLightbox>
				<SRLWrapper>
					<Grid container>
						{images.map((item, i) => (
							<Grid item xs={6}>
								<a href={item} key={i}>
									<ImgContainer>
										<StyledThumb src={item} alt="" />
									</ImgContainer>
								</a>
							</Grid>
						))}
					</Grid>
				</SRLWrapper>
			</SimpleReactLightbox>
		</>
	)
}

export default PropertyGallery
