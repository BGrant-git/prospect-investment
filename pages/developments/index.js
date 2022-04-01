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
import { motion } from 'framer-motion'
import Link from 'next/link'

import { database, storage } from '../../firebaseConfig'

import ProjectCard from '../../components/projectCards/ProjectCard'
import StaggerAnimateWrapper from '../../components/framerWrappers/StaggerAnimateWrapper'

import { CenterRule } from '../../store/context'
import { framerMotionVariants } from '../../store/framerMotionVariants'
import {
	Container,
	ProjectsWrapper,
	StyledH1,
} from '../../public/styles/pages-styles/developmentsStyles/developmentsStyles'
import { projectsDataShort } from '../../public/text-files/projectsText'

const Developments = () => {
	const databaseRef = collection(database, 'properties')
	const [properties, setProperties] = useState([])

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

	useEffect(() => {
		async function getProperties() {
			const propertiesCollection = collection(database, 'properties')
			const propertiesSnapshot = await getDocs(propertiesCollection)
			const properties = propertiesSnapshot.docs.map((doc) => {
				const data = doc.data()
				data.id = doc.id
				return data
			})
			setProperties(properties)
		}
		getProperties(properties)
	}, [])

	// TODO fix stagger animate
	// TODO grab data with getStaticProps instead of in useEffect

	return (
		<motion.div
			variants={framerMotionVariants.fadeIn}
			initial="initial"
			animate="animate"
		>
			<Container>
				<StyledH1>DEVELOPMENTS</StyledH1>
				<CenterRule background="white" />
				<StaggerAnimateWrapper variant={framerMotionVariants.stagger.container}>
					<ProjectsWrapper>
						{properties.map((item, i) => (
							<motion.div variants={framerMotionVariants.stagger.item} key={i}>
								<ProjectCard
									title={item.title}
									location={item.location}
									status={item.isCompleted}
									description={item.description}
									img={item.heroImg}
									id={item.id}
								/>
							</motion.div>
						))}
					</ProjectsWrapper>
				</StaggerAnimateWrapper>
			</Container>
		</motion.div>
	)
}

export default Developments
