import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'

const LeftAnimateWrapper = ({ children }) => {
	const { framerLeftSlideVariants, matchesSm } = useContext(StoreContext)

	return (
		<>
			{matchesSm ? (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={framerLeftSlideVariants}
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
