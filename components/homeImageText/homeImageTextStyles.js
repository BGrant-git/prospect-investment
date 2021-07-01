import styled from 'styled-components'

export const Container = styled.div`
	width: 450px;
	height: 450px;
	margin-right: 6%;
	color: white;

	@media (max-width: 855px) {
		margin: auto;
	}
`

export const TextWrapper = styled.div`
	padding: 10px;
`

export const StyledH1 = styled.h1`
	font-size: 35px;
`

export const StyledH2 = styled.h2`
	font-size: 25px;
`

export const muiButtonStyle = {
	background: 'white',
	fontSize: '18px',
	width: '270px',
	height: '50px',
}
