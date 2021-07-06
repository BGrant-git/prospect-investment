import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { StyledA, StyledImg, LinkWrapper, StyledH1 } from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarMob = () => {
	return (
		<>
			<Link href="/">
				<StyledA>
					<StyledImg src={logoImg} alt="" />
					<div>
						<StyledH1>PROSPECT</StyledH1>
						<h1 style={{ color: 'var(--main-colour' }}>INVESTMENT</h1>
					</div>
				</StyledA>
			</Link>
			<Menu right styles={hamburgerMenuStyles}>
				<div>
					<LinkWrapper>
						<a href="/" className="menu-item">
							<h2>HOME</h2>
						</a>
					</LinkWrapper>
					<LinkWrapper>
						<a href="/about" className="menu-item">
							<h2>ABOUT</h2>
						</a>
					</LinkWrapper>
					<LinkWrapper>
						<a href="/services" className="menu-item">
							<h2>SERVICES</h2>
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
						<a className="menu-item">
							<h2>CONTACT US</h2>
						</a>
					</LinkWrapper>
				</div>
			</Menu>
		</>
	)
}

export default NavbarMob
