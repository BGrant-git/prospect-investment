import { useEffect, createContext, useContext, useState } from 'react'

import app from '../firebase/firebase'

export const AuthContext = createContext()

//3.
export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	useEffect(() => {
		app.auth().onAuthStateChanged(setUser)
		console.log(user)
	}, [])

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	)
}
