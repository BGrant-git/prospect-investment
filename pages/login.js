import { useContext } from 'react'

import { StoreContext } from '../store/context'
import LoginComponent from '../components/authComponents/LoginComponent'
import LogoutComponent from '../components/authComponents/LogoutComponent'

const Login = () => {
	const { userData, isLoggedIn } = useContext(StoreContext)
	const [userDataVal, setUserDataVal] = userData
	const [isLoggedInVal, setIsLoggedInVal] = isLoggedIn

	return (
		<div>
			<LoginComponent
				setUserDataVal={setUserDataVal}
				setIsLoggedInVal={setIsLoggedInVal}
			/>
			<LogoutComponent
				setUserDataVal={setUserDataVal}
				setIsLoggedInVal={setIsLoggedInVal}
			/>
		</div>
	)
}

export default Login
