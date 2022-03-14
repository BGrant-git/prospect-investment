import { useState } from 'react'

import { collection, addDoc } from 'firebase/firestore'
import { app, database } from '../../firebaseConfig'

const NewProjectForm = () => {
	const [name, setName] = useState('')
	const [age, setAge] = useState(null)
	const databaseRef = collection(database, 'CRUD data')

	const addData = () => {
		addDoc(databaseRef, {
			name: name,
			age: age,
		})
			.then(() => {
				alert('Data sent')
				setName('')
				setAge(null)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	return (
		<div>
			<input
				placeholder="Name"
				type="text"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<input
				placeholder="Age"
				type="number"
				value={age}
				onChange={(event) => setAge(event.target.value)}
			/>
			<button onClick={addData}>ADD</button>
		</div>
	)
}

export default NewProjectForm
