import styled from 'styled-components'

export const Container = styled.div`
	border: 1px solid black;
	width: 1000px;
	height: 400px;
	margin: 0 auto;

	@media (max-width: 855px) {
		margin: 10px 0;
		width: 100%;
		height: auto;
	}
`
