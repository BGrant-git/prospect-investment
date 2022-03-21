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
import { motion } from 'framer-motion'
import Link from 'next/link'

import { database } from '../../firebaseConfig'

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
	const [fireData, setFireData] = useState([])
	const databaseRef = collection(database, 'properties')

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
						{projectsDataShort.map((item, i) => (
							<motion.div variants={framerMotionVariants.stagger.item} key={i}>
								<a href={`/developments/${item.id}`} passHref>
									<ProjectCard
										title={item.title}
										area={item.area}
										status={item.status}
										description={item.description}
										gdv={item.gdv}
										img={item.img}
									/>
								</a>
							</motion.div>
						))}
					</ProjectsWrapper>
				</StaggerAnimateWrapper>
			</Container>
		</motion.div>
	)
}

export default Developments
