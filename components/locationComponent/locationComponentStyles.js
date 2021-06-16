import styled from 'styled-components'

export const Container = styled.div`
	border: 1px solid black;
	height: 550px;
	width: 400px;
	margin: 0 10px;

	@media (max-width: 855px) {
		margin: 10px 0;
		width: 100%;
		height: auto;
	}
`
