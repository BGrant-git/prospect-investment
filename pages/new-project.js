import { useState } from 'react'
import { setDoc, doc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { database, storage } from '../firebaseConfig'
import { useRouter } from 'next/router'

const NewProject = () => {
	const router = useRouter()
	const [docName, setDocName] = useState('Property Name...')
	const [heroImgProgress, setHeroImgProgress] = useState(0)
	const [imagesProgress, setImagesProgress] = useState(0)
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
	const propertiesRef = doc(database, 'properties', docName)

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
				setTitle('')
				setDescription('')
				setKeyFeatures([{ feature: '' }, { feature: '' }, { feature: '' }])
				setLocation('')
				setURLs([])
				router.push('/developments')
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

	return (
		<div>
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
