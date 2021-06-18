import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { StoreContext } from '../context/context'
import ServicesComponent from '../components/servicesComponent/ServicesComponent'

const Services = () => {
	const { transVariants } = useContext(StoreContext)

	return (
		<AnimatePresence exitBeforeEnter>
			<motion.div
				initial={transVariants.initial}
				animate={transVariants.animate}
			>
				<ServicesComponent />
			</motion.div>
		</AnimatePresence>
	)
}

export default Services
