import styled from 'styled-components'

export const ButtonContainer = styled.div`
	margin: 0 10px;
`

export const LinkStyle = styled.a`
	cursor: pointer;
	font-size: 22px;

	color: black;
	text-transform: uppercase;
	letter-spacing: 0.15em;

	display: inline-block;
	position: relative;

	&:after {
		background: none repeat scroll 0 0 transparent;
		bottom: 0;
		content: '';
		display: block;
		height: 2px;
		left: 50%;
		position: absolute;
		background: black;
		transition: width 0.3s ease 0s, left 0.3s ease 0s;
		width: 0;
	}
	&:hover:after {
		width: 100%;
		left: 0;
	}
`
