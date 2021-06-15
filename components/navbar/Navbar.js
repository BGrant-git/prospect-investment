import { useContext } from 'react'

import { StoreContext } from '../../context/context'

import NavbarDesk from '../navbarDesk/NavbarDesk'
import NavbarMob from '../navbarMob/NavbarMob'

const Navbar = () => {
	const { matchesMd } = useContext(StoreContext)
	return <>{matchesMd ? <NavbarDesk /> : <NavbarMob />}</>
}

export default Navbar
