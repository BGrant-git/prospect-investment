import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 20px 10px 0;
	width: 420px;
	min-height: 570px;
	cursor: pointer;
	transition: 0.1s ease-in-out;
	background-color: white;
	border-radius: 5px;

	&:hover {
		transform: scale(1.01);
		border-radius: 0px;
	}

	@media (max-width: 855px) {
		max-height: unset;
		border-radius: 0;

		&:hover {
			transform: none;
		}
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 20px;

	h1 {
		font-size: 35px;
		margin: 10px 0 0 0;
	}

	h3 {
		margin: 0;
	}

	p {
		font-size: 20px;
	}
`

export const StyledImg = styled.img`
	height: 250px;
	width: auto;
	border-radius: 0 0 5px 5px;

	@media (max-width: 855px) {
		border-radius: 0;
	}
`
