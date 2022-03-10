import Image from 'next/image'
import styled from 'styled-components'

import HomeImageText from '../homeImageText/HomeImageText'

import homepageBackgroundImage from '../../public/images/homepage/landing/background-gradient.webp'

const HeroSectionWrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.2 ease-in-out;
	margin-top: -80px;
	position: relative;

	@media (max-width: 855px) {
		transition: none;
	}
`

const HeroSection = () => {
	return (
		<HeroSectionWrapper>
			<Image src={homepageBackgroundImage} layout="fill" />
			<div>
				<HomeImageText />
			</div>
		</HeroSectionWrapper>
	)
}

export default HeroSection
