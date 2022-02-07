import { useContext } from 'react'

import { StoreContext } from '../store/context'
import { auth } from '../firebase/firebase'
import LoginComponent from '../components/authComponents/LoginComponent'
import LogoutComponent from '../components/authComponents/LogoutComponent'

const Login = () => {
	const { userData } = useContext(StoreContext)
	const [userDataVal, setUserDataVal] = userData

	return (
		<div>
			<LoginComponent setUserDataVal={setUserDataVal} />
			<LogoutComponent setUserDataVal={setUserDataVal} />
		</div>
	)
}

export default Login
