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
} from './navbarDeskStyles'

const NavbarDesk = () => {
	const { scrolled, userData, isLoggedIn } = useContext(StoreContext)
	const [scrolledVal] = scrolled
	const router = useRouter()

	const spanColour = scrolledVal
		? { color: 'white' }
		: { color: 'var(--main-colour)' }

	return (
		<Container bg={scrolledVal ? 'var(--main-colour)' : 'transparent'}>
			<LogoWrapper>
				<Link href="/" as="">
					<a>
						<StyledH1
							fontSize={scrolledVal ? '38px' : '45px'}
							marginTop={scrolledVal ? '23px' : '20px'}
						>
							PROSPECT <span style={spanColour}>INVESTMENT</span>
						</StyledH1>
					</a>
				</Link>
			</LogoWrapper>
			<LinkWrapper>
				<NavbarButtonDesk
					link={'/'}
					page={'HOME'}
					isActive={router.pathname == '/' ? true : false}
				/>
				<NavbarButtonDesk
					link={'/login'}
					page={'LOGIN'}
					isActive={router.pathname == '/' ? true : false}
				/>
				<NavbarButtonDesk
					link={'/about'}
					page={'ABOUT'}
					isActive={router.pathname == '/about' ? true : false}
				/>
				{/* <NavDropdown
					isActive={router.pathname == '/developments' ? true : false}
				/> */}
				<NavbarButtonDesk
					link={'/developments'}
					page={'DEVELOPMENTS'}
					isActive={router.pathname == '/developments' ? true : false}
				/>
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
