import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	text-align: left;
	max-width: 600px;
	margin: 0 auto 20px;

	a {
		text-decoration: underline;
		cursor: pointer;
	}

	@media (max-width: 855px) {
		font-size: 80%;
	}
`

export const InfoWrapper = styled.div`
	text-align: right;
	margin-right: 10px;
	color: var(--main-colour-dark);
`
