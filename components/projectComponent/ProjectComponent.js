import { motion } from 'framer-motion'

import {
	Container,
	Title,
	SubTitle,
	TopSection,
	MiddleSection,
	BottomSection,
	TextContainer,
	StyledImg,
	StyledP,
} from './projectComponentStyles'
import { completedProjectsData } from '../../public/text-files/projectsText'
import { LeftRule } from '../../context/context'

const testProject = completedProjectsData[0]

const ProjectComponent = () => {
	return (
		<Container>
			<TopSection>
				<TextContainer>
					<Title>{testProject.title}</Title>
					<LeftRule />
					<StyledP>{testProject.text0}</StyledP>
				</TextContainer>
				<StyledImg src={testProject.img0} alt="" />
			</TopSection>
			<MiddleSection>
				<StyledImg src={testProject.img1} alt="" />

				<TextContainer>
					<SubTitle>{testProject.subHeader}</SubTitle>
					<StyledP>{testProject.text1}</StyledP>
				</TextContainer>
			</MiddleSection>
			<BottomSection></BottomSection>
		</Container>
	)
}

export default ProjectComponent
