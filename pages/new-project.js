import { useState, useEffect } from 'react'
import {
	addDoc,
	setDoc,
	getDocs,
	collection,
	doc,
	updateDoc,
	deleteDoc,
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { database, storage } from '../firebaseConfig'
import NewProjectForm from '../components/newProjectForm/NewProjectForm'

const NewProject = () => {
	const [ID, setID] = useState(null)
	const [fireData, setFireData] = useState([])
	const [docName, setDocName] = useState('Property Name...')
	const [name, setName] = useState('')
	const [age, setAge] = useState(null)
	const [isUpdate, setIsUpdate] = useState(false)
	const [progress, setProgress] = useState(0)
	const databaseRef = collection(database, 'CRUD data')
	const docRef = doc(database, 'CRUD data', docName)

	const propertiesRef = collection(database, 'properties')

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

	const setData = () => {
		setDoc(docRef, {
			name: name,
			age: Number(age),
		})
			.then(() => {
				alert('Data sent')
				getData()
				setName('')
				setAge('')
				setDocName('Property Name...')
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

	const formHandler = (event) => {
		event.preventDefault()
		const file = event.target[0].files[0]
		uploadFiles(file)
	}

	const uploadFiles = (file) => {
		if (!file) return
		//replace files with docName or whatever to specify folder in storage
		const storageRef = ref(storage, `files/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)
		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				setProgress(prog)
			},
			(err) => console.log(err),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url))
			}
		)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<div>
			<div>
				<input
					placeholder="Doc Name"
					type="text"
					value={docName}
					onFocus={(event) => event.target.select()}
					onChange={(event) => setDocName(event.target.value)}
				/>
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
					<button onClick={setData}>ADD</button>
				)}
			</div>
			<div>
				{fireData.map((data) => {
					return (
						<div key={data.id}>
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
			<div>
				<form onSubmit={formHandler}>
					<input type="file" />
					<button type="submit">Upload</button>
				</form>
				<h4>Uploaded {progress} %</h4>
			</div>
		</div>
	)
}

export default NewProject
