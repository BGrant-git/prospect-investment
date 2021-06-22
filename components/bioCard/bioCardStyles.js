import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Container = styled.div`
	margin: 20px auto;
	padding: 10px;
	display: flex;
	align-items: center;
	max-width: 1000px;
	background-color: var(--faded-main-colour);

	@media (max-width: 855px) {
		height: auto;
		flex-direction: column;
	}
`

export const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0 20px 0;
	padding: 15px;
`

export const ImageStyles = styled.img`
	width: 200px;
	height: 200px;
`

export const TitleContainer = styled.div`
	margin: 0 10px 0;
	line-height: 40px;
	font-size: 130%;
	min-width: 250px;
	border: 3px black;
	border-right-style: ${(props) => props.border};

	@media (max-width: 855px) {
		font-size: 90%;
		line-height: 30px;
	}
`

export const TextContainer = styled.div`
	margin: 0 20px;

	@media (max-width: 855px) {
		font-size: 80%;
	}
`

export const BioTextStyles = styled.p`
	text-align: justify;
	font-size: 18px;
`
