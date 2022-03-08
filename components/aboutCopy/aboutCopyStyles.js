import styled from 'styled-components'

export const RowWrapper = styled.div`
	max-width: 1000px;
	display: flex;
	align-items: center;
	margin: 0 auto;
	font-size: 20px;
	z-index: 1;
	background-color: white;
	border-radius: 5px;
	overflow: hidden;

	@media (max-width: 855px) {
		flex-direction: column;
		border-radius: 0px;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
`

export const StyledP = styled.p`
	font-weight: bold;
`

export const StyledImgLeftWrapper = styled.div`
	width: auto;
	height: 100%;
	border-radius: 0 5px 0 0;
	margin-bottom: -5px;

	@media (max-width: 855px) {
		width: 100%;
		border-radius: 0;
	}
`

export const StyledImgRightWrapper = styled.div`
	width: auto;
	height: 100%;
	border-radius: 0 0 0 5px;
	margin-bottom: -5px;

	@media (max-width: 855px) {
		width: 100%;
		border-radius: 0;
	}
`
