import Link from 'next/link'

import { ButtonContainer, LinkStyle } from './navbarButtonDeskStyle'

const NavbarButtonsDesk = ({ link, isActive, page }) => {
	return (
		<ButtonContainer>
			<Link href={link}>
				<LinkStyle>{page}</LinkStyle>
			</Link>
		</ButtonContainer>
	)
}

export default NavbarButtonsDesk
