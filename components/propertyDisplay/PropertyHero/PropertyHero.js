import { Grid } from '@mui/material'
import Image from 'next/image'

const PropertyHeroImg = require('../../../public/images/projects/BakerRoad/groundFloor/001.jpg')
const AgentLogo = require('../../../public/images/projects/BakerRoad/groundFloor/agentLogo.jpg')

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
				<div>
					<div>
						<h1>{props.title}</h1>
					</div>
					<div>
						<h2>{props.subtitle}</h2>
					</div>
				</div>
				<div>
					<AgentLogoWrapper>
						<StyledImgWrapper>
							<img src={props.agentLogo} alt="" width="100%" />
						</StyledImgWrapper>
					</AgentLogoWrapper>
				</div>
			</TextWrapper>
		</div>
	)
}

export default PropertyHeroSection
