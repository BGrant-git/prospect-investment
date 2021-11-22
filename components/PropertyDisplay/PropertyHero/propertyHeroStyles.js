import styled from 'styled-components'

export const TextContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;

	@media (max-width: 960px) {
		justify-content: center;
		flex-wrap: wrap;
		text-align: center;
	}
`

export const StyledImg = styled.img`
	width: 100%;
`

export const AgentLogoContainer = styled.div`
	width: 220px;
	text-align: right;
`
