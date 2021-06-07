import NavbarButtonDesktop from '../navbarDeskButton/NavbarButtonDesk'

import { Container, LogoContainer, LinkContainer } from './navbarDeskStyles'

import NavbarButtonDesk from '../navbarDeskButton/NavbarButtonDesk'
import Navbar from '../navbar/Navbar'

const NavbarDesk = () => {
	return (
		<Container>
			<LogoContainer>
				<h1>
					PROSPECT <span style={{ color: 'white' }}>INVESTMENT</span>
				</h1>
			</LogoContainer>
			<LinkContainer>
				<NavbarButtonDesk link={'/'} />
			</LinkContainer>
		</Container>
	)
}

export default NavbarDesk
