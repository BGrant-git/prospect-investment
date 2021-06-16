import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import { MobLink, MobHeader, Logo } from './navbarMobStyles'
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
					<MobLink className="menu-item" href="/">
						<h2>HOME</h2>
					</MobLink>
					<MobLink className="menu-item" href="/about">
						<h2>ABOUT</h2>
					</MobLink>
					<MobLink className="menu-item" href="/services">
						<h2>ABOUT</h2>
					</MobLink>
					<MobLink className="menu-item" href="/projects">
						<h2>PROJECTS</h2>
					</MobLink>
					<MobLink className="menu-item" href="/contact">
						<h2>CONTACT US</h2>
					</MobLink>
				</div>
			</Menu>
		</>
	)
}

export default NavbarMob
