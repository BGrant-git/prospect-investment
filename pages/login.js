import { useEffect, useContext } from 'react'
import firebase from '../firebase/firebase'

import { StoreContext } from '../store/context'
import LoginComponent from '../components/authComponents/LoginComponent'
import LogoutComponent from '../components/authComponents/LogoutComponent'

const Login = () => {
	const { user } = useContext(StoreContext)
	const [userVal, setUserVal] = user

	//TODO admin access to accounts

	useEffect(() => {
		firebase.auth().onAuthStateChanged((userVal) => {
			setUserVal(userVal)
		})
	}, [])

	console.log(userVal)

	return (
		<div>
			<LoginComponent />
			<LogoutComponent />
		</div>
	)
}

export default Login
