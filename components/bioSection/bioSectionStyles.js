import styled from 'styled-components'

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
	margin: 0 auto;
	text-align: center;
	font-size: 20px;
	z-index: 1;

	@media (max-width: 855px) {
	}
`
export const CopyText = styled.div`
	padding: 10px;
	text-align: justify;

	@media (max-width: 855px) {
	}
`
