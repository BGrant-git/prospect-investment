import { useContext } from 'react'

import { StoreContext } from '../../context/context'

import NavbarDesk from '../navbarDesk/NavbarDesk'
import NavbarMob from '../navbarMob/NavbarMob'

const Navbar = () => {
	const { matches } = useContext(StoreContext)
	return <>{matches ? <NavbarDesk /> : <NavbarMob />}</>
}

export default Navbar
