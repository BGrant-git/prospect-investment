import Link from 'next/link'

import { ButtonWrapper, StyledA } from './navbarButtonDeskStyle'

const NavbarButtonsDesk = ({ link, isActive, page }) => {
	return (
		<ButtonWrapper>
			<Link href={link} as={`/${link}`}>
				<StyledA style={isActive ? { color: 'var(--main-colour)' } : null}>
					{page}
				</StyledA>
			</Link>
		</ButtonWrapper>
	)
}

export default NavbarButtonsDesk
