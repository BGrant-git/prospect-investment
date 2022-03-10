import { useContext, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { slide as Menu } from 'react-burger-menu'

import { StoreContext } from '../../store/context'
import {
	LogoContainer,
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

// TODO make active link look nicer

const NavbarMob = () => {
	const {
		scrolled,
		slideUp,
		menuOpenState,
		toggleMenu,
		menuStateChangeHandler,
	} = useContext(StoreContext)
	const [scrolledVal] = scrolled
	const [menuOpenStateVal, setMenuOpenStateVal] = menuOpenState

	return (
		<div>
			<LogoContainer>
				<Link href="/" passHref>
					<StyledA>
						<div>
							<StyledH1>PROSPECT</StyledH1>
							<h1 style={{ color: 'var(--main-colour' }}>INVESTMENT</h1>
						</div>
					</StyledA>
				</Link>
			</LogoContainer>
			<Menu
				right
				styles={hamburgerMenuStyles}
				isOpen={menuOpenStateVal}
				onStateChange={(state) => menuStateChangeHandler(state)}
			>
				<div onClick={toggleMenu}>
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
