import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { StyledA, StyledImg, LinkWrapper } from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarMob = () => {
	return (
		<>
			<Link href="/">
				<StyledA>
					<StyledImg src={logoImg} alt="" />
					<div>
						<h1>PROSPECT</h1>
						<h1 style={{ color: 'var(--main-colour' }}>INVESTMENT</h1>
					</div>
				</StyledA>
			</Link>
			<Menu right styles={hamburgerMenuStyles}>
				<div>
					<LinkWrapper>
						<a className="menu-item" href="/">
							<h2>HOME</h2>
						</a>
					</LinkWrapper>
					<LinkWrapper>
						<a className="menu-item" href="/about">
							<h2>ABOUT</h2>
						</a>
					</LinkWrapper>

					<LinkWrapper>
						<a className="menu-item" href="/services">
							<h2>ABOUT</h2>
						</a>
					</LinkWrapper>

					<LinkWrapper>
						<a className="menu-item" href="/projects">
							<h2>PROJECTS</h2>
						</a>
						<a className="menu-item" href="/projects">
							<h3>- COMPLETED</h3>
						</a>
						<a className="menu-item" href="/projects">
							<h3>- IN PROGRESS</h3>
						</a>
					</LinkWrapper>

					<LinkWrapper>
						<a className="menu-item" href="/contact">
							<h2>CONTACT US</h2>
						</a>
					</LinkWrapper>
				</div>
			</Menu>
		</>
	)
}

export default NavbarMob
