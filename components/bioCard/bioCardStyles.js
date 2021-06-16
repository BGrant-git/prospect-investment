import styled from 'styled-components'

export const Container = styled.div`
	margin: 20px 20px;
	padding: 10px;
	display: flex;
	align-items: center;
	max-width: 1000px;

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
`

export const ImageStyles = styled.img`
	width: 200px;
	height: 200px;
`

export const TitleContainer = styled.div`
	margin: 0 10px 0;
	line-height: 40px;
	font-size: 130%;

	@media (max-width: 855px) {
		font-size: 100%;
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
