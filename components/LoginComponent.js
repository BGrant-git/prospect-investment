import { signInWithGoogle } from '../firebase/firebase'

const LoginComponent = () => {
	return (
		<div>
			<button onClick={signInWithGoogle}>Sign in with Google</button>
		</div>
	)
}

export default LoginComponent
