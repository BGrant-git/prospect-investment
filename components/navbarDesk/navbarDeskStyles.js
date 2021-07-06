import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	background-color: transparent;
`

export const LogoWrapper = styled.div`
	font-size: 19px;
	padding: 0 10px;
	cursor: pointer;
	line-height: 30px;
`

export const StyledImg = styled.img`
	min-width: 70px;
	height: 70px;
	margin: 3px 5px 0 0;
`

export const StyledH1 = styled.h1`
	@media (max-width: 1247px) {
		margin: 14px 5px 0 0;
	}
`

export const LinkWrapper = styled.div`
	display: flex;
	margin-right: 1%;
	padding-top: 25px;
`

export const StyledA = styled.a`
	display: flex;
`
