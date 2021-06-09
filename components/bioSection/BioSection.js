import { useContext } from 'react'

import { StoreContext } from '../../context/context'
import BioCardDesk from '../bioCardDesk/BioCardDesk'
import { Container, CopySectionStyles, Title } from './bioSectionStyles'

import { aboutPageCopy, bioData } from '../../public/text-files/aboutText'

const BioSection = () => {
	const { matches } = useContext(StoreContext)

	return (
		<Container>
			<Title>Who We Are</Title>
			<CopySectionStyles>{aboutPageCopy}</CopySectionStyles>
			{bioData.map((item, i) => (
				<BioCardDesk
					name={item.name}
					position={item.position}
					bioText={item.bioText}
					img={item.img}
					alignRight={item.alignRight}
					key={i}
				/>
			))}
		</Container>
	)
}

export default BioSection
