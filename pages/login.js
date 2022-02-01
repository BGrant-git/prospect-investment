import { useEffect, useContext } from 'react'
import firebase from '../firebase/firebase'

import { StoreContext } from '../store/context'
import LoginComponent from '../components/authComponents/LoginComponent'
import LogoutComponent from '../components/authComponents/LogoutComponent'

const Login = () => {
	const { user } = useContext(StoreContext)
	const [userVal, setUserVal] = user
	// const [user, setUser] = useState(null)

	//TODO read user state from layout and render something there idk

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
