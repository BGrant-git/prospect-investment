import styled from 'styled-components'

export const Container = styled.div`
	width: 1000px;
	height: 220px;
	margin: 50px auto;
	background: white;
	line-height: 15px;
	padding: 1px 0 20px;

	@media (max-width: 960px) {
		margin: 10px 0;
		width: 100%;
		height: auto;
	}
`

export const TextWrapper = styled.div`
	font-size: 18px;
	line-height: 15px;
`

export const StyledA = styled.a`
	font-size: 20px;
	color: purple;
	text-decoration: underline;
`
