import { slide as Menu } from 'react-burger-menu'

import { MobLinksContainer, MobLink } from './navbarMobStyles'
import { hamburgerMenuStyles } from './hamburgerMenuStyles'

const NavbarMob = () => {
	return (
		<Menu right styles={hamburgerMenuStyles}>
			<MobLinksContainer>
				<MobLink className="menu-item" href="/">
					<h2>HOME</h2>
				</MobLink>
				<MobLink className="menu-item" href="/about">
					<h2>ABOUT</h2>
				</MobLink>
				<MobLink className="menu-item" href="/about">
					<h2>PROJECTS</h2>
				</MobLink>
				<MobLink className="menu-item" href="/contact">
					<h2>CONTACT US</h2>
				</MobLink>
			</MobLinksContainer>
		</Menu>
	)
}

export default NavbarMob
