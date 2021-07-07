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
				<Link href="/projects" as="/projects">
					<StyledA style={isActive ? { color: 'var(--main-colour)' } : null}>
						PROJECTS
					</StyledA>
				</Link>
			</ButtonWrapper>
			<NavbarDropdownContent>
				<DropdownLinkWrapper>
					<Link href="/projects" as="/projects">
						<a>COMPLETED</a>
					</Link>
				</DropdownLinkWrapper>
				<DropdownLinkWrapper>
					<Link href="/projects" as="/projects">
						<a>IN PROGRESS</a>
					</Link>
				</DropdownLinkWrapper>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
