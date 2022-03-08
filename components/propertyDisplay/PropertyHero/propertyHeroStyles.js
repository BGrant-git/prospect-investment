import styled from 'styled-components'

export const TextWrapper = styled.div`
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

export const StyledImgWrapper = styled.div`
	width: 100%;
`

export const AgentLogoWrapper = styled.div`
	width: 220px;
	text-align: right;
`
