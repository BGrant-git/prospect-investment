import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore'
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
} from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCgHEORpXG8qrM-y1xkHIjTnne0Z2otnTM',
	authDomain: 'prospect-investment.firebaseapp.com',
	projectId: 'prospect-investment',
	storageBucket: 'prospect-investment.appspot.com',
	messagingSenderId: '1064392309360',
	appId: '1:1064392309360:web:ce04497cc293d6329912b5',
	measurementId: 'G-3KBPRWN0YV',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider)
		const user = res.user
		const q = query(collection(db, 'users'), where('uid', '==', user.uid))
		const docs = await getDocs(q)
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			})
		}
		console.log(auth)
	} catch (err) {
		console.error(err)
		if (!Error === 'Firebase: Error (auth/popup-closed-by-user).') {
			alert(err.message)
		}
	}
}

const logout = () => {
	signOut(auth)
	console.log(auth)
}

export { auth, db, signInWithGoogle, logout }
