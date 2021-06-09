import NavbarDesk from '../navbarDesk/NavbarDesk'
import NavbarMob from '../navbarMob/NavbarMob'
import { useMediaQuery } from '@material-ui/core'

const Navbar = () => {
	const matches = useMediaQuery('(min-width: 855px)')
	return <>{matches ? <NavbarDesk /> : <NavbarMob />}</>
}

export default Navbar
