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
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore()

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
		//console.log(auth)
	} catch (err) {
		//console.error(err)
		if (!err === 'Firebase: Error (auth/popup-closed-by-user).') {
			alert(err.message)
		}
	}
}

const logout = () => {
	signOut(auth)
}

export { auth, db, signInWithGoogle, logout }
