import styled from 'styled-components'
import { Card } from '@material-ui/core'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: auto;
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: center;
`

export const Title = styled.h1`
	text-align: center;
	font-size: 50px;
	width: 800px;

	@media (max-width: 855px) {
		margin-top: 0;
	}
`

export const CopySectionStyles = styled.div`
	max-width: 900px;
	margin: 150px auto 80px;
	text-align: center;
	font-size: 25px;
	z-index: 1;

	@media (max-width: 855px) {
		z-index: -1;
		margin-top: 13%;
	}
`
export const CopyText = styled.div`
	padding: 40px;
	text-align: justify;

	@media (max-width: 855px) {
		padding: 50px 40px;
	}
`
