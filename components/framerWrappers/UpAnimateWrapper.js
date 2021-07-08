import { useContext } from 'react'
import { motion } from 'framer-motion'

import { StoreContext } from '../../context/context'

const UpAnimateWrapper = ({ children }) => {
	const { framerUpVariants, matchesSm } = useContext(StoreContext)

	return (
		<>
			{matchesSm ? (
				<motion.div
					initial="hidden"
					animate="visible"
					variants={framerUpVariants}
				>
					{children}
				</motion.div>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default UpAnimateWrapper
