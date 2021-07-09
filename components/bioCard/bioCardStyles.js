import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Container = styled.div`
	margin: 20px auto;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 400px;
	height: 650px;
	background-color: white;
	text-align: center;
	border-radius: 5px;

	@media (max-width: 855px) {
		width: 100%;
		max-width: 500px;
		height: auto;
		border-radius: 0px;
	}
`

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	margin: 0 20px 0;
	padding: 15px;
`

export const StyledImg = styled.img`
	width: 200px;
	height: 200px;
`

export const TitleWrapper = styled.div`
	margin: 0 10px 0;
	line-height: 40px;
	min-width: 250px;
	border: 3px black;
	border-bottom-style: ${(props) => props.border};
	border-radius: 0;

	h1 {
		font-size: 35px;
	}

	h2 {
		font-size: 30px;
	}

	@media (max-width: 855px) {
		font-size: 90%;
		line-height: 30px;
	}
`

export const TextWrapper = styled.div`
	margin: 0 20px;

	@media (max-width: 855px) {
		font-size: 80%;
	}
`

export const StyledP = styled.p`
	text-align: justify;
	font-size: 18px;
`
