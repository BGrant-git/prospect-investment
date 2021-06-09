import styled from 'styled-components'

export const Container = styled.div`
	width: 450px;
	height: 450px;
	border: 5px solid white;
	margin-right: 6%;
	color: white;
	border-radius: 3px;
	background: rgba(0, 0, 0, 0.2);
`

export const TextContainer = styled.div`
	padding: 10px;
`

export const Header = styled.h1`
	font-size: 35px;
`

export const SubHeader = styled.h2`
	font-size: 25px;
`

export const ButtonContainer = styled.div`
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
	border-radius: 3px;
	transition: ease-out 0.3s;
	box-shadow: inset 0 0 0 0 rgba(255, 255, 255, 0.5);

	&:hover {
		box-shadow: inset 250px 0 0 0 rgba(255, 255, 255, 0.5);
		color: #303030;
	}
`
