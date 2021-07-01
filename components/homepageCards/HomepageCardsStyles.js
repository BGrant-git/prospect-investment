import styled from 'styled-components'

export const Container = styled.div`
	justify-content: center;
	margin: 20px auto 60px;
	max-width: 1200px;
`

export const CardTextWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	color: white;
	border: 3px solid white;
	background: rgba(0, 0, 0, 0.2);
	padding: 0 10px;
	transition: 0.2s ease-in-out;

	@media (max-width: 855px) {
		font-size: 12px;
	}
`

export const CardWrapper = styled.div`
	display: flex;
	position: relative;
	text-align: center;
	cursor: pointer;
	transition: 0.1s ease-in-out;

	&:hover {
		transform: scale(1.02);
		z-index: 1;
	}

	@media (max-width: 855px) {
		&:hover {
			transform: none;
		}
	}
`

export const StyledImg = styled.img`
	width: 100%;
	height: 100%;

	@media (max-width: 855px) {
		margin-bottom: -4px;
	}
`
