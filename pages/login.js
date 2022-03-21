import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { app } from '../firebaseConfig'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const auth = getAuth()
	const router = useRouter()

	const signIn = () => {
		signInWithEmailAndPassword(auth, email, password).then(
			(response) =>
				sessionStorage.setItem('userToken', response.user.accessToken),
			router.push('/').catch((err) => {
				console.err(err)
			})
		)
	}

	const signOut = () => {
		sessionStorage.setItem('userToken', null)
	}

	useEffect(() => {
		let token = sessionStorage.getItem('userToken')

		if (token) {
			router.push('/')
		}
	}, [])

	return (
		<div>
			<input
				placeholder="email"
				type="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<input
				placeholder="password"
				type="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
			/>
			<button onClick={signIn}>Sign In</button>
			<button onClick={signOut}>Sign Out</button>
		</div>
	)
}

export default Login
