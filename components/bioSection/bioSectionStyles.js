import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1200px;
	margin: auto;
`

export const TitleContainer = styled.div`
	margin: auto;
`

export const Title = styled.h1`
	text-align: center;
	font-size: 50px;
	width: 800px;

	@media (max-width: 855px) {
		margin-top: 0;
	}
`

export const CenterRule = styled.div`
	background-color: black;
	width: 60px;
	height: 3px;
	margin: -30px auto 15px;
`
