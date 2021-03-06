import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	background-color: transparent;
	transition: 0.2s ease-in-out;
	z-index: 999;
	position: sticky;
	top: 0;
	left: 0;
	background-color: ${(props) => props.bg};
	border-radius: 0px;
`

export const LogoWrapper = styled.div`
	font-size: 19px;
	padding: 0 10px;
	cursor: pointer;
	line-height: 30px;
`

export const StyledH1 = styled.h1`
	transition: 0.2s ease-in-out;
	color: white;
	font-size: ${(props) => props.fontSize};
	margin-top: ${(props) => props.marginTop};

	@media (max-width: 1247px) {
		margin: 14px 5px 0 0;
	}
`

export const LinkWrapper = styled.div`
	display: flex;
	margin-right: 1%;
	padding-top: 25px;
`
