// framer motion settings

export const framerMotionVariants = {
	transitionVariants: {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				duration: 0.4,
			},
		},
	},
	framerUpVariants: {
		hidden: { opacity: 0, translateY: '10%' },
		visible: {
			opacity: 1,
			translateY: '0%',
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
	},
	framerLeftSlideVariants: {
		hidden: { opacity: 0, translateX: '10%' },
		visible: {
			opacity: 1,
			translateX: '0%',
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	},
	framerRightSlideVariants: {
		hidden: { opacity: 0, translateX: '-10%' },
		visible: {
			opacity: 1,
			translateX: '0%',
			transition: {
				duration: 1,
				delay: 0.3,
			},
		},
	},
	framerStaggerVariants: {
		container: {
			hidden: { opacity: 0 },
			visible: {
				opacity: 1,
				transition: {
					delay: 0.3,
					staggerChildren: 0.5,
				},
			},
		},
		item: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
	},
}
