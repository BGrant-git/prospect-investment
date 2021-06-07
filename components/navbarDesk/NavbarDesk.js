import Link from 'next/link'

import NavbarButtonDesk from '../navbarDeskButton/NavbarButtonDesk'

import { Container, LogoContainer, LinkContainer } from './navbarDeskStyles'

const NavbarDesk = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href="/">
					<h1>
						PROSPECT <span style={{ color: '#1E90FF' }}>INVESTMENT</span>
					</h1>
				</Link>
			</LogoContainer>
			<LinkContainer>
				<NavbarButtonDesk link={'/'} page={'HOME'} />
				<NavbarButtonDesk link={'/about'} page={'ABOUT'} />
				<NavbarButtonDesk link={'/projects'} page={'PROJECTS'} />
				<NavbarButtonDesk link={'/contact'} page={'CONTACT US'} />
			</LinkContainer>
		</Container>
	)
}

export default NavbarDesk
