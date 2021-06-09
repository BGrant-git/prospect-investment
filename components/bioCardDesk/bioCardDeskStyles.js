import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	text-align: ${(props) => props.align};
	margin: 20px 0;
`

export const ImageContainer = styled.div``

export const ImageStyles = styled.img`
	width: 300px;
	height: 300px;
`

export const TextContainer = styled.div`
	margin: 0 20px;
	line-height: 10px;
`

export const BioTextStyles = styled.p`
	text-align: justify;
	line-height: normal;
	font-size: 19px;
`
