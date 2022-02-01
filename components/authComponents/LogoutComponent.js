import { signOutFromGoogle } from '../../firebase/firebase'

const LogoutComponent = () => {
	return (
		<div>
			<button onClick={signOutFromGoogle}>Sign out</button>
		</div>
	)
}

export default LogoutComponent
