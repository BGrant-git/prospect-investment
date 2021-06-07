import Link from 'next/link'

import { ButtonContainer, ActiveButtonContainer } from './navbarButtonDeskStyle'

const NavbarButtonsDesk = ({ link, isActive }) => {
	return (
		<>
			{isActive ? (
				<ActiveButtonContainer>
					<Link href={link}>button</Link>
				</ActiveButtonContainer>
			) : (
				<ButtonContainer>
					<Link href={link}>button</Link>
				</ButtonContainer>
			)}
		</>
	)
}

export default NavbarButtonsDesk
