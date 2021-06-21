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
				<Link href="JavaScript:Void(0)">
					<LinkStyle>PROJECTS</LinkStyle>
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