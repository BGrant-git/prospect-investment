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
				<Link href="/investments" as="/investments">
					<StyledA style={isActive ? { color: 'var(--main-colour)' } : null}>
						INVESTMENTS
					</StyledA>
				</Link>
			</ButtonWrapper>
			<NavbarDropdownContent>
				<DropdownLinkWrapper>
					<Link href="/investments" as="/investments">
						<a>COMPLETED</a>
					</Link>
				</DropdownLinkWrapper>
				<DropdownLinkWrapper>
					<Link href="/investments" as="/investments">
						<a>IN PROGRESS</a>
					</Link>
				</DropdownLinkWrapper>
			</NavbarDropdownContent>
		</NavbarDropdown>
	)
}

export default NavDropdown
