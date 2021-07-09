import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: -80px;
	padding-top: 80px;
	background: linear-gradient(0deg, white, 85%, rgba(25, 25, 112, 0.35)),
		url(${(props) => props.bg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
	background-attachment: fixed;
	border-radius: 0;
`

export const ContentWrapper = styled.div`
	max-width: 1200px;
	display: flex;
	flex-direction: column;
`

export const TitleWrapper = styled.div`
	margin: auto;
`

export const StyledH1 = styled.h1`
	text-align: center;
	font-size: 50px;
	max-width: 800px;
	color: white;

	@media (max-width: 855px) {
		margin-top: 0;
		width: auto;
		font-size: 45px;
	}
`
