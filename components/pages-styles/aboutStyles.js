import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: auto;
`

export const TitleWrapper = styled.div`
	margin: auto;
`

export const StyledH1 = styled.h1`
	text-align: center;
	font-size: 50px;
	width: 800px;

	@media (max-width: 855px) {
		margin-top: 0;
		width: auto;
		font-size: 45px;
	}
`
