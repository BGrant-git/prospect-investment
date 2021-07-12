import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto 20px;
	padding: 0 11%;
	border-radius: 5px;

	a {
		text-decoration: underline;
		cursor: pointer;
		background: lightgray;
	}

	@media (max-width: 855px) {
		font-size: 80%;
		border-radius: 0;
	}
`

export const ContentWrapper = styled.div`
	display: flex;
	justify-content: center;
	background: #e0e0e0;
`

export const ContactMethodWrapper = styled.div`
	text-align: right;
	margin-right: 10px;
	color: var(--main-colour-dark);
`

export const DetailsWrapper = styled.div`
	text-align: left;
`
