import styled from 'styled-components'

export const RowStyle = styled.div`
	max-width: 1000px;
	display: flex;
	align-items: center;
	margin: 0 auto;
	font-size: 20px;
	z-index: 1;
	background-color: var(--faded-main-colour);

	@media (max-width: 855px) {
		flex-direction: column;
	}
`

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10px;
`

export const Text = styled.p`
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

export const LeftRule = styled.div`
	background-color: black;
	width: 60px;
	height: 3px;
	margin: -10px 0 -5px;
`

export const RightRule = styled.div`
	background-color: black;
	width: 60px;
	height: 3px;
	margin: -10px 0 -5px;
	margin-left: auto;
	margin-right: 0;
`
