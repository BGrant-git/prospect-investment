import styled from 'styled-components'

export const Container = styled.div`
	margin: 0 auto -3px;
	display: flex;
	padding: 0 0 75px;

	@media (max-width: 855px) {
		flex-direction: column;
		text-align: center;
	}
`

export const ImageStyle = styled.img`
	width: 450px;
	height: 300px;

	@media (max-width: 855px) {
		margin: auto;
		width: 100%;
		height: auto;
	}
`

export const TextContainer = styled.div`
	padding: 0 20px 0;
`