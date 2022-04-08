import Image from 'next/image'

import {
	StyledImgWrapper,
	TextWrapper,
	AgentLogoWrapper,
} from './propertyHeroStyles'

const PropertyHeroSection = (props) => {
	return (
		<div>
			<StyledImgWrapper>
				<img src={props.img} alt="" width="100%" />
			</StyledImgWrapper>
			<TextWrapper>
				<h1>{props.title}</h1>
			</TextWrapper>
		</div>
	)
}

export default PropertyHeroSection
