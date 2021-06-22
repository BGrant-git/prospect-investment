import Link from 'next/link'

import NavbarButtonDesk from '../navbarButtonDesk/NavbarButtonDesk'
import NavDropdown from '../navDropdown/NavDropdown'

import {
	Container,
	LogoContainer,
	Logo,
	Styledh1,
	LinkContainer,
	LinkStyles,
} from './navbarDeskStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarDesk = () => {
	return (
		<Container>
			<LogoContainer>
				<Link href="/">
					<LinkStyles>
						<Logo src={logoImg} alt="" />
						<Styledh1>
							PROSPECT{' '}
							<span style={{ color: 'var(--main-colour' }}>INVESTMENT</span>
						</Styledh1>
					</LinkStyles>
				</Link>
			</LogoContainer>
			<LinkContainer>
				<NavbarButtonDesk link={'/'} page={'HOME'} />
				<NavbarButtonDesk link={'/about'} page={'ABOUT'} />
				<NavbarButtonDesk link={'/services'} page={'SERVICES'} />
				<NavDropdown />
				<NavbarButtonDesk link={'/contact'} page={'CONTACT'} />
			</LinkContainer>
		</Container>
	)
}

export default NavbarDesk
