import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'

const StaggerAnimateWrapper = ({ variant, children }) => {
	const { framerStaggerVariants, matchesSm } = useContext(StoreContext)

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
