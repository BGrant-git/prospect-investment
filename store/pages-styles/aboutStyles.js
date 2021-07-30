import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	background: linear-gradient(0deg, white, 75%, rgba(25, 25, 112, 0.35)),
		url(${(props) => props.bg});
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: contain;
	background-attachment: fixed;
	border-radius: 0;
	margin-top: -80px;
	padding-top: 160px;

	@media (max-width: 855px) {
		background-position: 0% 15%;
		width: 100%;
		overflow: hidden;
	}
`

export const ContentWrapper = styled.div`
	max-width: 1200px;
	display: flex;
	flex-direction: column;
`

export const TitleWrapper = styled.div`
	margin: 0 auto 20px;
`

export const HeaderBackground = styled.div`
	background-color: 'rgba(25, 25, 112, 0.375)';
	width: 100%;
	height: 80px;
	margin: -80px 0 80px;
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
