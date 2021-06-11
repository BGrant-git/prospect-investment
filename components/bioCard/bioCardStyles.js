import styled from 'styled-components'

export const Container = styled.div`
	margin: 20px 0;
	display: flex;
	flex-direction: column;
`

export const ImageContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 0 20px 0;
`

export const ImageStyles = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100px;
`

export const Title = styled.div`
	margin: 0 10px 0;
	line-height: 10px;
	@media (max-width: 855px) {
		line-height: 25px;
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
