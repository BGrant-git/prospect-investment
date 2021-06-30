import styled from 'styled-components'

export const Container = styled.div`
	width: 450px;
	height: 450px;
	margin-right: 6%;
	color: white;

	@media (max-width: 855px) {
		margin: auto;
	}
`

export const TextWrapper = styled.div`
	padding: 10px;
`

export const StyledH1 = styled.h1`
	font-size: 35px;
`

export const StyledH2 = styled.h2`
	font-size: 25px;
`

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`

export const Button = styled.button`
	background-color: transparent;
	border: 4px solid white;
	color: white;
	width: 250px;
	height: 65px;
	font-family: inherit;
	font-size: 22px;
	cursor: pointer;
	transition: ease-out 0.3s;

	&:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}
`
