import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	background: linear-gradient(rgba(25, 25, 112, 0.2), rgba(25, 25, 112, 0.4)),
		url(${(props) => props.backgroundImg});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-top: -80px;
	padding-top: 80px;
`

export const ContentWrapper = styled.div`
	width: 1000px;
	margin: 50px auto 100px;
	background: white;
	padding: 0 0 20px;
	border-radius: 5px;

	@media (max-width: 960px) {
		margin: 10px 0;
		width: 100%;
		height: 605px;
		border-radius: 0px;
	}
`

export const StyledH1 = styled.h1`
	font-size: 42px;
`

export const DetailsWrapper = styled.div`
	display: flex;
	justify-content: center;
	text-align: left;

	a {
		color: var(--main-colour-dark);
		text-decoration: underline;
		cursor: pointer;
	}
`

export const InfoWrapper = styled.div`
	text-align: right;
	margin: 0 10px 0 0;
`
