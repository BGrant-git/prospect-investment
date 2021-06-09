import Link from 'next/link'

import NavbarButtonDesk from '../navbarDeskButton/NavbarButtonDesk'

import {
	Container,
	LogoContainer,
	Logo,
	LinkContainer,
	LinkStyles,
} from './navbarDeskStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarDesk = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href="/">
					<LinkStyles style={{ textDecoration: 'none', display: 'flex' }}>
						<Logo src={logoImg} alt="" />
						<h1>
							PROSPECT <span style={{ color: '#009eef' }}>INVESTMENT</span>
						</h1>
					</LinkStyles>
				</Link>
			</LogoContainer>
			<LinkContainer>
				<NavbarButtonDesk link={'/'} page={'HOME'} />
				<NavbarButtonDesk link={'/about'} page={'ABOUT'} />
				<NavbarButtonDesk link={'/services'} page={'SERVICES'} />
				<NavbarButtonDesk link={'/projects'} page={'PROJECTS'} />
				<NavbarButtonDesk link={'/contact'} page={'CONTACT'} />
			</LinkContainer>
		</Container>
	)
}

export default NavbarDesk
