import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyCgHEORpXG8qrM-y1xkHIjTnne0Z2otnTM',
	authDomain: 'prospect-investment.firebaseapp.com',
	projectId: 'prospect-investment',
	storageBucket: 'prospect-investment.appspot.com',
	messagingSenderId: '1064392309360',
	appId: '1:1064392309360:web:ce04497cc293d6329912b5',
	measurementId: 'G-3KBPRWN0YV',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const signOutFromGoogle = () => auth.signOut(provider)

export default firebase
