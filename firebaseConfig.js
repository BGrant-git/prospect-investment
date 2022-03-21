import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// const firebaseConfig = {
// 	apiKey: 'AIzaSyCgHEORpXG8qrM-y1xkHIjTnne0Z2otnTM',
// 	authDomain: 'prospect-investment.firebaseapp.com',
// 	projectId: 'prospect-investment',
// 	storageBucket: 'prospect-investment.appspot.com',
// 	messagingSenderId: '1064392309360',
// 	appId: '1:1064392309360:web:ce04497cc293d6329912b5',
// }

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const storage = getStorage(app)
