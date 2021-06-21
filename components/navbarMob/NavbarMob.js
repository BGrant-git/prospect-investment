import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { MobHeader, Logo, LinkContainer } from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const logoImg = require('../../public/images/Logo/logo.png')

const NavbarMob = () => {
	return (
		<>
			<Link href="/">
				<MobHeader>
					<Logo src={logoImg} alt="" />
					<div>
						<h1>PROSPECT</h1>
						<h1 style={{ color: 'var(--main-colour' }}>INVESTMENT</h1>
					</div>
				</MobHeader>
			</Link>
			<Menu right styles={hamburgerMenuStyles}>
				<div>
					<LinkContainer>
						<a className="menu-item" href="/">
							<h2>HOME</h2>
						</a>
					</LinkContainer>
					<LinkContainer>
						<a className="menu-item" href="/about">
							<h2>ABOUT</h2>
						</a>
					</LinkContainer>

					<LinkContainer>
						<a className="menu-item" href="/services">
							<h2>ABOUT</h2>
						</a>
					</LinkContainer>

					<LinkContainer>
						<a className="menu-item" href="/projects">
							<h2>PROJECTS</h2>
						</a>
						<a className="menu-item" href="/projects">
							<h3>- COMPLETED</h3>
						</a>
						<a className="menu-item" href="/projects">
							<h3>- IN PROGRESS</h3>
						</a>
					</LinkContainer>

					<LinkContainer>
						<a className="menu-item" href="/contact">
							<h2>CONTACT US</h2>
						</a>
					</LinkContainer>
				</div>
			</Menu>
		</>
	)
}

export default NavbarMob
