import { useEffect } from 'react'
import {
	addDoc,
	setDoc,
	getDocs,
	getDoc,
	collection,
	doc,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore'

import { database } from '../../firebaseConfig'

const Property = (props) => {
	console.log(props.property)

	return <div>hi</div>
}

export const getStaticPaths = async () => {
	const snapshot = await getDocs(collection(database, 'properties'))
	const paths = snapshot.docs.map((doc) => {
		return { params: { propertyId: doc.id.toString() } }
	})
	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps = async (context) => {
	const id = context.params.propertyId
	const docRef = doc(database, 'properties', id)
	const docSnap = await getDoc(docRef)
	return {
		props: { property: JSON.stringify(docSnap.data()) || null },
	}
}

export default Property
