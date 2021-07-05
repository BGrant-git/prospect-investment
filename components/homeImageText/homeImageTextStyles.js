import styled from 'styled-components'

export const Container = styled.div`
	color: white;
	text-align: center;
	max-width: 1000px;

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
	fontSize: '19px',
	padding: '10px 40px',
	// width: '250px',
	// height: '50px',
}
