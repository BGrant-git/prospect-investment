import { Grid } from '@material-ui/core'

const PropertyHeroImg = require('../../../public/images/projects/BakerRoad/first-floor/image-000.jpg')
const AgentLogo = require('../../../public/images/projects/BakerRoad/first-floor/agentLogo.jpg')

import {
	StyledImg,
	TextContainer,
	AgentLogoContainer,
} from './propertyHeroStyles'

const PropertyHeroSection = () => {
	return (
		<div>
			<div>
				<StyledImg
					src="https://res.cloudinary.com/dx1onk3nb/image/upload/v1637598157/Prospect/Properties/Baker%20Street/First%20Floor/image-000_ctziop.jpg"
					alt=""
				/>
			</div>
			<TextContainer>
				<div>
					<div>
						<h1>First Floor, Angel House, Cable Street, London E1</h1>
					</div>
					<div>
						<h3>2 Bed Flat, Asking Price £525,000</h3>
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
