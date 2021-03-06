import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../store/context'

const StaggerAnimateWrapper = ({ variant, children }) => {
	const { stagger, matchesSm } = useContext(StoreContext)

	return (
		<>
			{matchesSm ? (
				<motion.div initial="hidden" animate="visible" variants={variant}>
					{children}
				</motion.div>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default StaggerAnimateWrapper
