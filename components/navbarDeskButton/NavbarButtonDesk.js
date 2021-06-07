import Link from 'next/link'

import {
	ButtonContainer,
	ActiveButtonContainer,
	LinkStyle,
} from './navbarButtonDeskStyle'

const NavbarButtonsDesk = ({ link, isActive, page }) => {
	return (
		<>
			{isActive ? (
				<ActiveButtonContainer>
					<Link href={link}>
						<LinkStyle>{page}</LinkStyle>
					</Link>
				</ActiveButtonContainer>
			) : (
				<ButtonContainer>
					<Link href={link}>
						<LinkStyle>{page}</LinkStyle>
					</Link>
				</ButtonContainer>
			)}
		</>
	)
}

export default NavbarButtonsDesk
