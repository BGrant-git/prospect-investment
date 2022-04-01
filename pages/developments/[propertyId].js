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
import Link from 'next/link'

import { database } from '../../firebaseConfig'

import PropertyDisplay from '../../components/propertyDisplay/PropertyDisplayComponent/PropertyDisplay'

const Property = (props) => {
	console.log(props.id)
	return (
		<>
			<PropertyDisplay propertyData={props.property} />
			<div>
				<button>Edit</button>
				<button>Delete</button>
			</div>
		</>
	)
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
		props: { property: docSnap.data(), id: id || null },
		revalidate: 10,
	}
}

export default Property
