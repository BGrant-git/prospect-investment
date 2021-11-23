import { Grid } from '@material-ui/core'

const PropertyHeroImg = require('../../../public/images/projects/BakerRoad/groundFloor/001.jpg')
const AgentLogo = require('../../../public/images/projects/BakerRoad/groundFloor/agentLogo.jpg')

import { StyledImg, TextWrapper, AgentLogoWrapper } from './propertyHeroStyles'

const PropertyHeroSection = (props) => {
	return (
		<div>
			<div>
				<StyledImg src={props.img} alt="" />
			</div>
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
						<StyledImg src={props.agentLogo} alt="" />
					</AgentLogoWrapper>
				</div>
			</TextWrapper>
		</div>
	)
}

export default PropertyHeroSection
