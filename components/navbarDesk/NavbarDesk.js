import Link from 'next/link'
import { useContext } from 'react'
import { useRouter } from 'next/router'

import NavbarButtonDesk from '../navbarButtonDesk/NavbarButtonDesk'
import NavDropdown from '../navDropdown/NavDropdown'

import { StoreContext } from '../../store/context'
import {
	Container,
	LogoWrapper,
	StyledH1,
	LinkWrapper,
	StyledA,
} from './navbarDeskStyles'

const NavbarDesk = () => {
	const { scrolled } = useContext(StoreContext)
	const [scrolledVal] = scrolled
	const router = useRouter()

	return (
		<Container bg={scrolledVal ? 'var(--main-colour-dark)' : 'transparent'}>
			<LogoWrapper>
				<Link href="/" as="">
					<StyledA>
						<StyledH1 fontSize={scrolledVal ? '38px' : '45px'}>
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
