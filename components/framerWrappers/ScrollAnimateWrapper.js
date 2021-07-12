import { useContext, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { StoreContext } from '../../store/context'

const ScrollAnimateWrapper = ({ variants, children }) => {
	const { matchesSm } = useContext(StoreContext)
	const controls = useAnimation()

	const { ref, inView } = useInView({ threshold: 0.1 })

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<>
			{matchesSm ? (
				<motion.div
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={variants}
				>
					{children}
				</motion.div>
			) : (
				<>{children}</>
			)}
		</>
	)
}

export default ScrollAnimateWrapper
