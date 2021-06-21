import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../context/context'
import BioSection from '../components/bioSection/BioSection'

const About = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			initial="initial"
			animate="animate"
			variants={transitionVariants}
		>
			<BioSection />
		</motion.div>
	)
}

export default About
