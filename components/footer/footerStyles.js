import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	max-height: 60px;
	text-align: center;
	border: 2px black;
	border-top-style: solid;

	@media (max-width: 855px) {
		flex-direction: column;
		justify-content: flex-start;
		text-align: center;
	}
`

export const LogoWrapper = styled.div`
	filter: opacity(0.7);
`

export const LinksWrapper = styled.div``
