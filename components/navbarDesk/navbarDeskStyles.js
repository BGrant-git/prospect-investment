import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
`

export const LogoContainer = styled.div`
	font-size: 19px;
	padding: 0 10px;
	cursor: pointer;
	line-height: 30px;
`

export const Logo = styled.img`
	min-width: 70px;
	height: 70px;
	margin: 3px 5px 0 0;
`

export const Styledh1 = styled.h1`
	@media (max-width: 1247px) {
		margin: 14px 5px 0 0;
	}
`

export const LinkContainer = styled.div`
	display: flex;
	margin-right: 1%;

	padding-top: 25px;
`

export const LinkStyles = styled.a`
	display: flex;
`
