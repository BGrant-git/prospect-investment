import { logout, auth } from '../../firebase/firebase'

const LogoutComponent = ({ setUserDataVal, setIsLoggedInVal }) => {
	const onClickHandler = (auth) => {
		logout()
		setUserDataVal(auth)
		setIsLoggedInVal(false)
		window.localStorage.clear()
	}

	return (
		<div>
			<button onClick={() => onClickHandler(auth)}>Sign out</button>
		</div>
	)
}

export default LogoutComponent
