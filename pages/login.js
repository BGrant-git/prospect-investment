import { useState, useEffect } from 'react'

import LoginComponent from '../components/LoginComponent'
import firebase from '../firebase/firebase'

const Login = () => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user)
		})
	}, [])

	console.log(user)

	return (
		<div>
			<LoginComponent />
		</div>
	)
}

export default Login
