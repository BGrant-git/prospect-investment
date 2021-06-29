import Link from 'next/link'

import {
	NavbarDropdownContent,
	NavbarDropdown,
	DropdownLink,
	ButtonContainer,
	LinkStyle,
} from './navDropdownStyles'

const NavDropdown = ({ link, isActive, page }) => {
	return (
		<NavbarDropdown>
			<ButtonContainer>
				<Link href="/projects">
					<LinkStyle style={isActive ? { color: 'var(--main-colour)' } : null}>
						PROJECTS
					</LinkStyle>
				</Link>
			</ButtonContainer>
			<NavbarDropdownContent>
				<DropdownLink>
					<Link href="/projects">COMPLETED</Link>
				</DropdownLink>
				<DropdownLink>
					<Link href="/projects">IN PROGRESS</Link>
				</DropdownLink>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
