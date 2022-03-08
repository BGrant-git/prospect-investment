import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'

import { StoreContext } from '../../store/context'
import {
	StyledA,
	StyledImg,
	LinkWrapper,
	StyledH1,
	ArrowWrapper,
	StyledIcon,
} from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const logoImg = require('../../public/images/Logo/logo.png')
const navArrow = require('../../public/images/arrow-up.png')

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}

const NavbarMob = () => {
	const { scrolled, slideUp } = useContext(StoreContext)
	const [scrolledVal] = scrolled

	return (
		<div>
			<Link href="/" passHref>
				<StyledA>
					<div>
						<StyledH1>PROSPECT</StyledH1>
						<h1 style={{ color: 'var(--main-colour' }}>INVESTMENT</h1>
					</div>
				</StyledA>
			</Link>
			<Menu right styles={hamburgerMenuStyles}>
				<div>
					<LinkWrapper>
						<Link href="/" className="menu-item" passHref>
							<h2>HOME</h2>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/about" className="menu-item" passHref>
							<h2>ABOUT</h2>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link className="menu-item" href="/developments" passHref>
							<h2>DEVELOPMENTS</h2>
						</Link>
						<Link className="menu-item" href="/developments" passHref>
							<h3>- COMPLETED</h3>
						</Link>
						<Link className="menu-item" href="/developments" passHref>
							<h3>- IN PROGRESS</h3>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link className="menu-item" href="/contact" passHref>
							<h2>CONTACT US</h2>
						</Link>
					</LinkWrapper>
				</div>
			</Menu>
			<ArrowWrapper
				display={scrolledVal ? 'initial' : 'none'}
				onClick={() => scrollToTop()}
			>
				<Image src={navArrow} alt="" width={50} height={50} />
			</ArrowWrapper>
		</div>
	)
}

export default NavbarMob
