import styled from 'styled-components'

export const Container = styled.div`
	/* background: linear-gradient(rgba(25, 25, 112, 0.3), rgba(25, 25, 112, 0.1)),
		url(${(props) => props.background}); */
	background-position: top;
	background-repeat: no-repeat;
	background-size: 100% auto;
	margin-top: -80px;
	padding-top: 120px;
	min-height: 1000px;
`

export const TitleWrapper = styled.div`
	margin: 10xp auto;
	padding: 80px 0 20px;
	text-align: center;

	h1 {
		margin: 0 0 20px;
		font-size: 50px;
	}

	h2 {
		margin-top: -10px;
	}
`

export const DescWrapper = styled.div`
	text-align: center;
	margin-top: -20px;
`

export const IndexButtonWrapper = styled.div`
	margin: 0 auto 20px;
	text-align: center;
`

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 860px) {
		flex-direction: column;
	}
`

export const ButtonDiv = styled.div`
	cursor: pointer;
	font-size: 20px;
	margin: 0 10px;
	border: 2px solid var(--main-dark);
	border-radius: 3px;
	padding: 10px;
	font-weight: bold;

	@media (max-width: 860px) {
		margin: 5px auto;
		width: 50%;
	}
`
