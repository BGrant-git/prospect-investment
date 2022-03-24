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
import {
	getDownloadURL,
	ref,
	uploadBytesResumable,
	uploadBytes,
} from 'firebase/storage'
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
	const [imagesToUpload, setImagesToUpload] = useState([])
	const databaseRef = collection(database, 'CRUD data')
	const propertiesRef = doc(database, 'properties', docName)
	const docRef = doc(database, 'CRUD data', docName)

	const [isCompleted, setIsCompleted] = useState(false)
	const [description, setDescription] = useState('')
	const [keyFeatures, setKeyFeatures] = useState([{ feature: '' }])
	const [title, setTitle] = useState('')
	const [heroImg, setHeroImg] = useState('')

	const setPropertyData = () => {
		setDoc(propertiesRef, {
			isCompleted: isCompleted,
			title: title,
			description: description,
			keyFeatures: keyFeatures,
			heroImg: heroImg,
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

	const heroImgHandler = (event) => {
		event.preventDefault()
		const file = event.target[0].files[0]
		uploadFiles(file)
	}

	const fileSelectedHandler = (event) => {
		setImagesToUpload(event.target.files)
	}

	const handleFormChange = (event, index) => {
		let data = [...keyFeatures]
		data[index][event.target.name] = event.target.value
		setKeyFeatures(data)
	}

	const featuresSubmit = (e) => {
		e.preventDefault()
		setKeyFeatures(formFields)
	}

	const addFields = () => {
		let object = {
			feature: '',
		}
		setKeyFeatures([...keyFeatures, object])
	}

	const removeFields = (index) => {
		let data = [...keyFeatures]
		data.splice(index, 1)
		setKeyFeatures(data)
	}

	const uploadFiles = (file) => {
		console.log(file)
		if (!file) return
		const sotrageRef = ref(storage, `files/${file.name}`)
		const uploadTask = uploadBytesResumable(sotrageRef, file)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				setProgress(prog)
			},
			(error) => console.log(error),
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					console.log('File available at', downloadURL)
					setHeroImg(downloadURL)
				})
			}
		)
	}

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
		console.log(keyFeatures)
	}, [keyFeatures])

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
				<label>
					Completed:
					<select
						value={isCompleted}
						onChange={(event) => setIsCompleted(event.target.value)}
					>
						<option value={false}>No</option>
						<option value={true}>Yes</option>
					</select>
				</label>
				<input
					placeholder="Property Name"
					type="text"
					value={docName}
					onFocus={(event) => event.target.select()}
					onChange={(event) => setDocName(event.target.value)}
				/>
				<form onSubmit={heroImgHandler}>
					<input type="file" />
					<button type="submit">Upload</button>
					<h4>Uploaded {progress} %</h4>
				</form>
				<input
					placeholder="Description"
					type="text"
					value={description}
					onChange={(event) => setDescription(event.target.value)}
				/>
				<form>
					{keyFeatures.map((form, index) => {
						return (
							<div key={index}>
								<input
									name="feature"
									placeholder="Feature"
									onChange={(event) => handleFormChange(event, index)}
									value={form.name}
								/>
								<button onClick={() => removeFields(index)}>Remove</button>
							</div>
						)
					})}
				</form>
				<button onClick={addFields}>Add more</button>
				<br />
				<button onClick={setPropertyData}>Lets goooo</button>
			</div>
		</div>
	)
}

export default NewProject
