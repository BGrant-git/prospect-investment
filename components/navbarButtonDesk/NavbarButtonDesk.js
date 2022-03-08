import Link from 'next/link'

import { ButtonWrapper, StyledA, ActiveLink } from './navbarButtonDeskStyles'

const NavbarButtonsDesk = ({ link, isActive, page }) => {
	return (
		<ButtonWrapper>
			<Link href={link} as={link} passHref>
				<StyledA>{page}</StyledA>
			</Link>
			{/* {isActive ? <ActiveLink /> : null} */}
		</ButtonWrapper>
	)
}

export default NavbarButtonsDesk
