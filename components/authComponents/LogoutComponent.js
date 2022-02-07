import { logout, auth } from '../../firebase/firebase'

const LogoutComponent = ({ setUserDataVal }) => {
	const onClickHandler = () => {
		logout()
		setUserDataVal(null)
	}

	return (
		<div>
			<button onClick={onClickHandler}>Sign out</button>
		</div>
	)
}

export default LogoutComponent
