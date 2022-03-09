import Link from 'next/link'

import {
	NavbarDropdownContent,
	NavbarDropdown,
	DropdownLinkWrapper,
	ButtonWrapper,
	StyledA,
} from './navDropdownStyles'

const NavDropdown = ({ link, isActive, page }) => {
	return (
		<NavbarDropdown>
			<ButtonWrapper>
				<Link href="/developments" as="/developments" passHref>
					<StyledA style={isActive ? { color: 'var(--main-colour)' } : null}>
						DEVELOPMENTS
					</StyledA>
				</Link>
			</ButtonWrapper>
			<NavbarDropdownContent>
				<DropdownLinkWrapper>
					<Link href="/developments" as="/developments">
						COMPLETED
					</Link>
				</DropdownLinkWrapper>
				<DropdownLinkWrapper>
					<Link href="/developments" as="/developments">
						IN PROGRESS
					</Link>
				</DropdownLinkWrapper>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
