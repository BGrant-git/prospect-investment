import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	margin: 20px auto;
	max-width: 1200px;
	max-height: 250px;
	background-color: var(--faded-main-colour);
	cursor: pointer;
	transition: 0.1s ease-in-out;

	&:hover {
		transform: scale(1.01);
	}
`

export const Title = styled.h1`
	font-size: 35px;
	margin-top: 10px;
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px 20px;
`

export const StyledUl = styled.ul`
	list-style-type: square;
	margin-left: -15px;
`

export const StyledP = styled.p`
	font-size: 20px;
`

export const StyledImg = styled.img`
	height: 250px;
	width: auto;
	border-radius: 0px 5px 5px 0px;
`
