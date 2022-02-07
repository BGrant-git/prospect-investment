import { signInWithGoogle, auth } from '../../firebase/firebase'

const LoginComponent = ({ setUserDataVal }) => {
	const onClickHandler = () => {
		signInWithGoogle().then((auth) => {
			setUserDataVal(auth)
		})
	}

	return (
		<div>
			<button onClick={onClickHandler}>Sign in with Google</button>
		</div>
	)
}

export default LoginComponent
