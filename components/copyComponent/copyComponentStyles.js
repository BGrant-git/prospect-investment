import styled from 'styled-components'

export const RowWrapper = styled.div`
	max-width: 1000px;
	display: flex;
	align-items: center;
	margin: 0 auto;
	font-size: 20px;
	z-index: 1;
	background-color: var(--main-colour-faded);

	@media (max-width: 855px) {
		flex-direction: column;
	}
`

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
`

export const StyledP = styled.p`
	font-weight: bold;

	@media (max-width: 855px) {
	}
`

export const StyledImgLeft = styled.img`
	width: auto;
	height: 350px;
	border-radius: 0 5px 0 0;
`

export const StyledImgRight = styled.img`
	width: auto;
	height: 350px;
	border-radius: 0 0 0 5px;
`
