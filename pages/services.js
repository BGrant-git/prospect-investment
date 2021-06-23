import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../context/context'
import ServicesComponent from '../components/servicesComponent/ServicesComponent'

const Services = () => {
	const { transitionVariants } = useContext(StoreContext)

	return (
		<motion.div
			initial={transitionVariants.initial}
			animate={transitionVariants.animate}
			key="services"
		>
			<ServicesComponent />
		</motion.div>
	)
}

export default Services
