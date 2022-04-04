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
import { useRouter } from 'next/router'

import { database } from '../../firebaseConfig'

import PropertyDisplay from '../../components/propertyDisplay/PropertyDisplayComponent/PropertyDisplay'

const Property = (props) => {
	const router = useRouter()
	console.log(props.id)

	const deleteDocument = (id) => {
		let fieldToEdit = doc(database, 'properties', id)
		deleteDoc(fieldToEdit)
			.then(() => {
				alert('Data Deleted')
				router.push('/developments')
			})
			.catch((err) => {
				console.error(err)
			})
	}

	return (
		<>
			<PropertyDisplay propertyData={props.property} />
			<div>
				<button>Edit</button>
				<button
					onClick={() => {
						if (window.confirm('Are you sure you want to delete this doc?'))
							deleteDocument(props.id)
					}}
				>
					Delete
				</button>
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
		fallback: 'blocking',
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
