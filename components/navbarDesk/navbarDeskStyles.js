import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
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

	@media (max-width: 1247px) {
		margin: 18px 5px 0 0;
	}
`

export const LinkContainer = styled.div`
	display: flex;
	margin-right: 1%;
`

export const LinkStyles = styled.a`
	display: flex;
`
