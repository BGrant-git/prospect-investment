import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Image from 'next/image'

import { database, storage } from '../firebaseConfig'
import { ImageWrapper } from '../public/styles/pages-styles/developmentsStyles/projectFormStyles'

const EditProject = () => {
	const [project, setProject] = useState({})
	const [isCompleted, setIsCompleted] = useState(false)
	const [description, setDescription] = useState('')
	const [keyFeatures, setKeyFeatures] = useState([])
	const [title, setTitle] = useState('')
	const [location, setLocation] = useState('')
	const [heroImg, setHeroImg] = useState('')
	const [heroImgProgress, setHeroImgProgress] = useState(0)
	const [imagesToUpload, setImagesToUpload] = useState([])
	const [imagesProgress, setImagesProgress] = useState(0)
	const [URLs, setURLs] = useState([])
	const router = useRouter()
	const id = router.query.id
	const propertyRef = doc(database, 'properties', id)

	const updateProperty = () => {
		updateDoc(propertyRef, {
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
				router.push(`developments/${id}`)
			})
			.catch((err) => {
				console.error(err)
			})
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

	const removeImage = (image) => {
		let filteredArray = URLs.filter((item) => item !== image)
		setURLs(filteredArray)
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

	const uploadHeroImg = (file) => {
		console.log(file)
		if (!file) return
		const sotrageRef = ref(storage, `${id}/${file.name}`)
		const uploadTask = uploadBytesResumable(sotrageRef, file)

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
			const storageRef = ref(storage, `${id}/${file.name}`)
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
		const getData = async () => {
			const propertySnapshot = await getDoc(propertyRef)
			const property = propertySnapshot.data()
			console.log(property)
			property.id = propertySnapshot.id
			setIsCompleted(property.isCompleted)
			setDescription(property.description)
			setKeyFeatures(property.keyFeatures)
			setTitle(property.title)
			setLocation(property.location)
			setHeroImg(property.heroImg)
			setURLs(property.imageURLs)
		}
		getData()
	}, [id])

	return (
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
				onChange={(event) => setTitle(event.target.value)}
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
								value={form.feature}
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
			<div>
				{URLs.map((item, i) => (
					<div key={i}>
						<ImageWrapper>
							<Image src={item} layout="fill" />
						</ImageWrapper>
						<button
							onClick={() => {
								if (
									window.confirm('Are you sure you want to delete this image?')
								)
									removeImage(item)
							}}
						>
							Delete Image
						</button>
					</div>
				))}
			</div>
			<br />
			<button onClick={updateProperty}>Lets goooo</button>
		</div>
	)
}

export default EditProject
