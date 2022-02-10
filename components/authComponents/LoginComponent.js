import { signInWithGoogle, returnAuth } from '../../firebase/firebase'

const LoginComponent = ({ setUserDataVal, setIsLoggedInVal }) => {
	const onClickHandler = () => {
		signInWithGoogle().then(() => {
			setUserDataVal(returnAuth())
			setIsLoggedInVal(true)

			window.localStorage.setItem(
				'user',
				JSON.stringify(returnAuth().currentUser)
			)
		})
	}

	return (
		<div>
			<button onClick={onClickHandler}>Sign in with Google</button>
		</div>
	)
}

export default LoginComponent
