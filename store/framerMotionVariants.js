export const transitionVariants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 5,
		},
	},
}

export const framerUpVariants = {
	hidden: { opacity: 0, translateY: '10%' },
	visible: {
		opacity: 1,
		translateY: '0%',
		transition: {
			duration: 0.5,
		},
	},
}

export const framerLeftSlideVariants = {
	hidden: { opacity: 0, translateX: '10%' },
	visible: {
		opacity: 1,
		translateX: '0%',
		transition: {
			duration: 1,
			staggerChildren: 1,
		},
	},
}

export const framerRightSlideVariants = {
	hidden: { opacity: 0, translateX: '-10%' },
	visible: {
		opacity: 1,
		translateX: '0%',
		transition: {
			duration: 1,
		},
	},
}

export const framerStaggerVariants = {
	container: {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.5,
			},
		},
	},
	item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}
