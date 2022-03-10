import Link from 'next/link'

import { ButtonWrapper, StyledLink, ActiveLink } from './navbarButtonDeskStyles'

const NavbarButtonsDesk = ({ link, isActive, page }) => {
	return (
		<ButtonWrapper>
			<Link href={link} as={link} passHref>
				<StyledLink>{page}</StyledLink>
			</Link>
			{/* {isActive ? <ActiveLink /> : null} */}
		</ButtonWrapper>
	)
}

export default NavbarButtonsDesk
