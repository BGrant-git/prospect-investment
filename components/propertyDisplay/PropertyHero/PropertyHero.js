import { Grid } from '@material-ui/core'

const PropertyHeroImg = require('../../../public/images/projects/BakerRoad/groundFloor/001.jpg')
const AgentLogo = require('../../../public/images/projects/BakerRoad/groundFloor/agentLogo.jpg')

import {
	StyledImg,
	TextContainer,
	AgentLogoContainer,
} from './propertyHeroStyles'

const PropertyHeroSection = () => {
	return (
		<div>
			<div>
				<StyledImg src={PropertyHeroImg} alt="" />
			</div>
			<TextContainer>
				<div>
					<div>
						<h1>First Floor, Angel House, Cable Street, London E1</h1>
					</div>
					<div>
						<h2>2 Bed Flat, Asking Price £525,000</h2>
					</div>
				</div>
				<div>
					<AgentLogoContainer>
						<StyledImg src={AgentLogo} alt="" />
					</AgentLogoContainer>
				</div>
			</TextContainer>
		</div>
	)
}

export default PropertyHeroSection
