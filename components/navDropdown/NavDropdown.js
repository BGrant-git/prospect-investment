import Link from 'next/link'

import {
	NavbarDropdownContent,
	NavbarDropdown,
	DropdownLinkWrapper,
	ButtonWrapper,
	LinkStyle,
} from './navDropdownStyles'

const NavDropdown = ({ link, isActive, page }) => {
	return (
		<NavbarDropdown>
			<ButtonWrapper>
				<Link href="/projects">
					<LinkStyle style={isActive ? { color: 'var(--main-colour)' } : null}>
						PROJECTS
					</LinkStyle>
				</Link>
			</ButtonWrapper>
			<NavbarDropdownContent>
				<DropdownLinkWrapper>
					<Link href="/projects">COMPLETED</Link>
				</DropdownLinkWrapper>
				<DropdownLinkWrapper>
					<Link href="/projects">IN PROGRESS</Link>
				</DropdownLinkWrapper>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
