import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	text-align: ${(props) => props.align};
`

export const ImageContainer = styled.div``

export const ImageStyles = styled.img`
	width: 300px;
	height: 300px;
`

export const TextContainer = styled.div`
	margin: 0 20px;
`

export const BioTextStyles = styled.p`
	text-align: justify;
`
