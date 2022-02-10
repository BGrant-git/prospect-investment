import { signInWithGoogle, auth } from '../../firebase/firebase'

const LoginComponent = ({ setUserDataVal, setIsLoggedInVal }) => {
	const onClickHandler = (auth) => {
		signInWithGoogle().then(() => {
			setUserDataVal(auth)
			setIsLoggedInVal(true)
			window.localStorage.setItem('user', JSON.stringify(auth.currentUser))
		})
	}

	return (
		<div>
			<button onClick={() => onClickHandler(auth)}>Sign in with Google</button>
		</div>
	)
}

export default LoginComponent
