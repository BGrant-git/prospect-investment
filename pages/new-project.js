import { useState, useEffect } from 'react'
import {
	addDoc,
	getDocs,
	collection,
	doc,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore'

import { database } from '../firebaseConfig'
import NewProjectForm from '../components/newProjectForm/NewProjectForm'

const NewProject = () => {
	const [ID, setID] = useState(null)
	const [fireData, setFireData] = useState([])
	const [name, setName] = useState('')
	const [age, setAge] = useState(null)
	const [isUpdate, setIsUpdate] = useState(false)
	const databaseRef = collection(database, 'CRUD data')

	const addData = () => {
		addDoc(databaseRef, {
			name: name,
			age: Number(age),
		})
			.then(() => {
				alert('Data sent')
				getData()
				setName('')
				setAge(null)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const getData = async () => {
		await getDocs(databaseRef)
			.then((response) => {
				setFireData(
					response.docs.map((data) => {
						return { ...data.data(), id: data.id }
					})
				)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const getID = (id, name, age) => {
		setID(id)
		setName(name)
		setAge(age)
		setIsUpdate(true)
	}

	const updateFields = () => {
		let fieldToEdit = doc(database, 'CRUD data', ID)
		updateDoc(fieldToEdit, {
			name: name,
			age: Number(age),
		})
			.then(() => {
				alert('Data Updated')
				getData()
				setID(null)
				setName('')
				setAge('')
				setIsUpdate(false)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	const deleteDocument = (id) => {
		let fieldToEdit = doc(database, 'CRUD data', id)
		deleteDoc(fieldToEdit)
			.then(() => {
				alert('Data Deleted')
				getData()
			})
			.catch((err) => {
				console.error(err)
			})
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
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
				{isUpdate ? (
					<button onClick={updateFields}>UPDATE</button>
				) : (
					<button onClick={addData}>ADD</button>
				)}
			</div>
			<div>
				{fireData.map((data) => {
					return (
						<div>
							<h3>{data.name}</h3>
							<p>{data.age}</p>
							<button onClick={() => getID(data.id, data.name, data.age)}>
								UPDATE
							</button>
							<button onClick={() => deleteDocument(data.id)}>DELETE</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default NewProject
