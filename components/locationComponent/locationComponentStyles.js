import styled from 'styled-components'

export const Container = styled.div`
	width: 1000px;
	height: 320px;
	margin: 0 auto;

	@media (max-width: 855px) {
		margin: 10px 0;
		width: 100%;
		height: auto;
	}
`

export const TextWrapper = styled.div`
	font-size: 18px;
	line-height: 15px;
`

export const LinkWrapper = styled.a`
	font-size: 20px;
	color: purple;
	text-decoration: underline;
`
