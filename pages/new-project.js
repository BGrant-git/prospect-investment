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
	const [heroImgProgress, setHeroImgProgress] = useState(0)
	const [imagesProgress, setImagesProgress] = useState(0)
	const databaseRef = collection(database, 'CRUD data')
	const propertiesRef = doc(database, 'properties', docName)
	const docRef = doc(database, 'CRUD data', docName)

	const [isCompleted, setIsCompleted] = useState(false)
	const [description, setDescription] = useState('')
	const [keyFeatures, setKeyFeatures] = useState([
		{ feature: '' },
		{ feature: '' },
		{ feature: '' },
	])
	const [title, setTitle] = useState('')
	const [location, setLocation] = useState('')
	const [heroImg, setHeroImg] = useState('')
	const [imagesToUpload, setImagesToUpload] = useState([])
	const [URLs, setURLs] = useState([])

	const setPropertyData = () => {
		setDoc(propertiesRef, {
			isCompleted: isCompleted,
			title: title,
			location: location,
			description: description,
			keyFeatures: keyFeatures,
			heroImg: heroImg,
			imageURLs: URLs,
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

	const titleHandler = (event) => {
		setTitle(event.target.value)
		event.target.value
			? setDocName(event.target.value.toLowerCase().replaceAll(' ', '-'))
			: ''
	}

	const heroImgHandler = (event) => {
		event.preventDefault()
		const file = event.target[0].files[0]
		uploadHeroImg(file)
	}

	const imagesSubmit = (event) => {
		event.preventDefault()
		uploadImages(imagesToUpload)
	}

	const handleFeaturesFormChange = (event, index) => {
		let data = [...keyFeatures]
		data[index][event.target.name] = event.target.value
		setKeyFeatures(data)
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

	const uploadHeroImg = (file) => {
		console.log(file)
		if (!file) return
		const storageRef = ref(storage, `${docName}/${file.name}`)
		const uploadTask = uploadBytesResumable(storageRef, file)

		uploadTask.on(
			'state_changed',
			(snapshot) => {
				const prog = Math.round(
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				setHeroImgProgress(prog)
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

	const uploadImages = (files) => {
		const promises = []
		files.map((file) => {
			console.log('loop')
			const storageRef = ref(storage, `${docName}/${file.name}`)
			const uploadTask = uploadBytesResumable(storageRef, file)
			promises.push(uploadTask)
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const prog = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					)
					setImagesProgress(prog)
				},
				(error) => console.log(error),
				async () => {
					await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
						setURLs((prevState) => [...prevState, downloadURLs])
						console.log('File available at', downloadURLs)
					})
				}
			)
		})
		Promise.all(promises)
			.then(() => alert('All images uploaded'))
			.then((err) => console.log(err))
	}

	useEffect(() => {
		getData()
	}, [])

	useEffect(() => {
		console.log(docName)
	}, [docName])

	return (
		<div>
			<div>
				<input
					placeholder="Doc Name"
					type="text"
					value={title}
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
					value={title}
					onChange={titleHandler}
				/>
				<input
					placeholder="Location"
					type="text"
					value={location}
					onChange={(event) => setLocation(event.target.value)}
				/>
				<form onSubmit={heroImgHandler}>
					<input type="file" />
					<button type="submit">Upload</button>
					<h4>Uploaded {heroImgProgress} %</h4>
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
									onChange={(event) => handleFeaturesFormChange(event, index)}
									value={form.name}
								/>
								<button onClick={() => removeFields(index)}>Remove</button>
							</div>
						)
					})}
				</form>
				<button onClick={addFields}>Add more</button>
				<br />
				<form onSubmit={imagesSubmit}>
					<input
						type="file"
						multiple
						onChange={(event) => setImagesToUpload([...event.target.files])}
					/>
					<button type="submit">Upload</button>
					<h4>Uploaded {imagesProgress} %</h4>
				</form>
				<br />
				<button onClick={setPropertyData}>Lets goooo</button>
			</div>
		</div>
	)
}

export default NewProject
