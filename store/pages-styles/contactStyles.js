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
	width: 100%;
	margin: 20px auto 100px;
	background: white;
	padding: 40px 0 50px;

	@media (max-width: 960px) {
		margin: 10px 0;
		width: 100%;
		border-radius: 0px;
	}
`

export const StyledH1 = styled.h1`
	font-size: 42px;
	color: white;
	margin: 80px 0 40px;

	@media (max-width: 855px) {
		margin-top: 40px;
	}
`
