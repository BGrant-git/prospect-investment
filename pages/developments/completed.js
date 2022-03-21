import { useState, useEffect } from 'react'
import {
	addDoc,
	setDoc,
	getDocs,
	collection,
	doc,
	updateDoc,
	deleteDoc,
	where,
	query,
} from 'firebase/firestore'

import { database } from '../../firebaseConfig'

const CompletedProjects = () => {
	const [fireData, setFireData] = useState([])
	const databaseRef = collection(database, 'properties')
	const q = query(databaseRef, where('completed', '==', false))

	const getData = async () =>
		await getDocs(databaseRef)
			.then((response) =>
				console.log(
					response.docs.map((data) => {
						return data.data()
					})
				)
			)
			.catch((err) => {
				console.error(err)
			})

	useEffect(() => {
		getData()
	}, [])

	return <div></div>
}

export default CompletedProjects
