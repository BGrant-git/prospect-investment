import { logout, returnAuth } from '../../firebase/firebase'

const LogoutComponent = ({ setUserDataVal, setIsLoggedInVal }) => {
	const onClickHandler = () => {
		logout()
		setUserDataVal(returnAuth())
		setIsLoggedInVal(false)
	}

	return (
		<div>
			<button onClick={onClickHandler}>Sign out</button>
		</div>
	)
}

export default LogoutComponent
