import Link from 'next/link'
import { useRouter } from 'next/router'

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
	const router = useRouter()

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
				<NavbarButtonDesk
					link={'/'}
					page={'HOME'}
					isActive={router.pathname == '/' ? true : false}
				/>
				<NavbarButtonDesk
					link={'/about'}
					page={'ABOUT'}
					isActive={router.pathname == '/about' ? true : false}
				/>
				<NavbarButtonDesk
					link={'/services'}
					page={'SERVICES'}
					isActive={router.pathname == '/services' ? true : false}
				/>
				<NavDropdown isActive={router.pathname == '/projects' ? true : false} />
				<NavbarButtonDesk
					link={'/contact'}
					page={'CONTACT'}
					isActive={router.pathname == '/contact' ? true : false}
				/>
			</LinkContainer>
		</Container>
	)
}

export default NavbarDesk
