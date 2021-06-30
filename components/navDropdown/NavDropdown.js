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
				<Link href="/projects" as={'/projects'}>
					<LinkStyle style={isActive ? { color: 'var(--main-colour)' } : null}>
						<a>PROJECTS</a>
					</LinkStyle>
				</Link>
			</ButtonWrapper>
			<NavbarDropdownContent>
				<DropdownLinkWrapper>
					<Link href="/projects" as={'/projects'}>
						<a>COMPLETED</a>
					</Link>
				</DropdownLinkWrapper>
				<DropdownLinkWrapper>
					<Link href="/projects" as={'/projects'}>
						<a>IN PROGRESS</a>
					</Link>
				</DropdownLinkWrapper>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
