import Link from 'next/link'
import { useRouter } from 'next/router'

import NavbarButtonDesk from '../navbarButtonDesk/NavbarButtonDesk'
import NavDropdown from '../navDropdown/NavDropdown'

import {
	Container,
	LogoWrapper,
	StyledImg,
	StyledH1,
	LinkWrapper,
	StyledA,
} from './navbarDeskStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarDesk = () => {
	const router = useRouter()

	return (
		<Container>
			<LogoWrapper>
				<Link href="/">
					<StyledA>
						<StyledImg src={logoImg} alt="" />
						<StyledH1>
							PROSPECT{' '}
							<span style={{ color: 'var(--main-colour' }}>INVESTMENT</span>
						</StyledH1>
					</StyledA>
				</Link>
			</LogoWrapper>
			<LinkWrapper>
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
			</LinkWrapper>
		</Container>
	)
}

export default NavbarDesk
