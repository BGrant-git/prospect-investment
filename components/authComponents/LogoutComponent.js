import { logout } from '../../firebase/firebase'

const LogoutComponent = () => {
	return (
		<div>
			<button onClick={logout}>Sign out</button>
		</div>
	)
}

export default LogoutComponent
