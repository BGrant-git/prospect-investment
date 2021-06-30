import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { StyledA, StyledImg, LinkWrapper } from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarMob = () => {
	return (
		<>
			<Link href="/" as={`/`}>
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
						<Link href="/" as="/">
							<a className="menu-item">
								<h2>HOME</h2>
							</a>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/" as="/about">
							<a className="menu-item">
								<h2>ABOUT</h2>
							</a>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/" as="/services">
							<a className="menu-item">
								<h2>ABOUT</h2>
							</a>
						</Link>
					</LinkWrapper>
					<LinkWrapper>
						<Link href="/" as="/projects">
							<a className="menu-item" href="/projects">
								<h2>PROJECTS</h2>
							</a>
						</Link>
						<Link href="/" as="/projects">
							<a className="menu-item" href="/projects">
								<h3>- COMPLETED</h3>
							</a>
						</Link>
						<Link href="/" as="/projects">
							<a className="menu-item" href="/projects">
								<h3>- IN PROGRESS</h3>
							</a>
						</Link>
					</LinkWrapper>

					<LinkWrapper>
						<Link href="/" as="/contact">
							<a className="menu-item">
								<h2>CONTACT US</h2>
							</a>
						</Link>
					</LinkWrapper>
				</div>
			</Menu>
		</>
	)
}

export default NavbarMob
