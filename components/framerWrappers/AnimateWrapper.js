import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../store/context'

const AnimateWrapper = ({ children, variants }) => {
	const { matchesSm } = useContext(StoreContext)

	return (
		<>
			{matchesSm ? (
				<motion.div initial="hidden" animate="visible" variants={variants}>
					{children}
				</motion.div>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default AnimateWrapper
