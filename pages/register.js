import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const auth = getAuth()
	const router = useRouter()

	const signUp = () => {
		createUserWithEmailAndPassword(auth, email, password).then(
			(response) =>
				sessionStorage.setItem('userToken', response.user.accessToken),
			router.push('/').catch((err) => {
				console.error(err)
			})
		)
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
			<button onClick={signUp}>Sign Up</button>
		</div>
	)
}

export default Register
