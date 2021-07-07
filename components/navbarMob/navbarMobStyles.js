import styled from 'styled-components'

export const StyledA = styled.a`
	line-height: 5px;
	display: flex;
	cursor: pointer;
	width: 66%;
	margin-left: 10px;
`

export const LinkWrapper = styled.div`
	border: 3px white;
	border-left-style: solid;
	border-radius: 0;
	padding-left: 10px;
	color: white;
`

export const StyledH1 = styled.h1`
	color: white;
`

export const ArrowWrapper = styled.div`
	display: ${(props) => props.display};
	width: 50px;
	height: 50px;
	position: fixed;
	bottom: 20px;
	right: 10px;
	z-index: 98;
`
