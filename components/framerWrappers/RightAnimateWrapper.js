import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'

const LeftAnimateWrapper = ({ children }) => {
	const { framerRightSlideVariants, matchesSm } = useContext(StoreContext)

	return (
		<>
			{matchesSm ? (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={framerRightSlideVariants}
				>
					{children}
				</motion.div>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default LeftAnimateWrapper
