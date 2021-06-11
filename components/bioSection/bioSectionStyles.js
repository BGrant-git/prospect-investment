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
	position: relative;
	display: flex;
	justify-content: center;
`

export const Title = styled.h1`
	position: absolute;
	text-align: center;
	font-size: 50px;
	width: 800px;
	color: white;
`

export const CopySectionStyles = styled.div`
	max-width: 900px;
	margin: 150px auto 80px;
	text-align: center;
	font-size: 25px;
	z-index: 1;
`
export const CopyText = styled.div`
	background: #f2f2f2;
	padding: 40px;
	text-align: justify;
`
